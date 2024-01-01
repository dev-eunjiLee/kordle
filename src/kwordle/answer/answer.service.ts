import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebClientService } from 'src/util/web-client/web-client.service';

type DICT_TYPE = {
  channel: {
    item: Array<{
      word: string; // 단어
      pos: string; // 명사
      sense: {
        definition: string; // 단어의 의미
      };
    }>;
  };
};

export class Answer {
  constructor(word: string, definition: string) {
    this.word = word;
    this.definition = definition;
  }
  word: string;
  definition: string;
}

@Injectable()
export class AnswerService implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly webClientService: WebClientService,
  ) {}

  private answer: Answer;
  async onModuleInit() {
    this.answer = await this._getAnswer();
  }

  private async _getAnswer(): Promise<Answer> {
    const key = this.configService.get('DICTIONARY_API_KEY');
    const url = 'https://stdict.korean.go.kr/api/search.do';
    const method = 'get';
    const params: Record<string, unknown> = {
      key,
      type_search: 'search',
      req_type: 'json',
      q: this.answer?.word || '컴퓨터',
    };

    /**
     * Non-null assertion operator: !
     * 변수가 null이 아니라고 컴파일러에게 전달하여 Null 제약조건을 완화
     */

    // 실제 정답인 단어와 의미가 들어갈 변수
    let answer!: Answer;

    // * 첫번째 단어 검색하기
    const result = await this.webClientService
      .create(url)
      .method(method)
      .params(params)
      .retrieve();

    if (result.rawBody === '') {
      throw new Error('첫번째 키워드가 잘못되었습니다.');
    }

    const {
      channel: { item: itemList },
    } = result.rawBody as DICT_TYPE;

    // * 첫번째 단어 검색 후 나온 결과들에서 definition 분해해서, 분해된 definition 토큰들을 다시 검색한 후 해당 토큰이 명사이면 해당 값을 정답으로 설정함
    for await (const item of itemList) {
      console.log(`item: ${item.word}`);

      // definition 분리 후 정리
      const definitionTokenList = item.sense.definition
        .split(' ')
        .map((per) => per.trim().replace('.', ''));

      // 분리된 definition 토큰을 다시 검색
      for await (const token of definitionTokenList) {
        console.log(`token: ${token}`);
        params.q = token;

        // 토큰 검색
        const tokenSearchResult = await this.webClientService
          .create(url)
          .method(method)
          .params(params)
          .retrieve();

        if (tokenSearchResult.rawBody === '') {
          continue;
        }

        const {
          channel: { item: itemListByToken },
        } = tokenSearchResult.rawBody as DICT_TYPE;

        for await (const tokenItem of itemListByToken) {
          console.log(`tokenItem: ${tokenItem.word}`);

          if (tokenItem.pos === '명사') {
            answer = new Answer(tokenItem.word, tokenItem.sense.definition);
          }
        }
      }
    }

    if (answer === undefined) {
      throw new Error('정답 객체가 셋팅되지 않음');
    } else {
      return answer;
    }
  }
}
