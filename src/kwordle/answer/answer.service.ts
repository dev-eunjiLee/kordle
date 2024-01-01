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
      q: this.answer?.word || '나무',
    };

    const result = await this.webClientService
      .create(url)
      .method(method)
      .params(params)
      .retrieve();

    let answer: Answer;

    const {
      channel: { item: itemList },
    } = result.rawBody as DICT_TYPE;

    for await (const item of itemList) {
      console.log(`item: ${item.word}`);
      const definitionTokenList = item.sense.definition
        .split(' ')
        .map((per) => per.trim());
      for await (const token of definitionTokenList) {
        console.log(`token: ${token}`);
        params.q = token;
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

    return new Answer('나무', '나무');
  }
}
