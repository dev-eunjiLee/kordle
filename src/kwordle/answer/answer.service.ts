import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebClientService } from 'src/util/web-client/web-client.service';

@Injectable()
export class AnswerService implements OnModuleInit {
  private _answer: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly webClientService: WebClientService,
  ) {}

  onModuleInit() {
    this._setAnswer();
  }

  private async _setAnswer() {
    const key = this.configService.get('DICTIONARY_API_KEY');
    const url = 'https://stdict.korean.go.kr/api/search.do';
    const method = 'get';
    const params: Record<string, unknown> = {
      key,
      type_search: 'search',
      req_type: 'json',
    };

    let flag = true;

    let tempAnswer: string = this._answer;
    const willSearchedKeywordList = ['계이름', '달력', '이름'];
    let searchIndex = 0;

    while (flag) {
      params.q = tempAnswer || '세븐틴';

      const result = await this.webClientService
        .create(url)
        .method(method)
        .params(params)
        .retrieve();

      if (result.statusCode !== 200 || result.rawBody === '') {
        tempAnswer = willSearchedKeywordList[searchIndex];
      } else {
        const rawBody = result.rawBody as {
          channel: {
            item: Array<{
              word: string; // 표제어
              pos: string; // 품사
              definition: string; // 뜻풀이
            }>;
          };
        };

        for (const per of rawBody.channel.item) {
          if (per.pos === '명사' && per.word.length <= 3) {
            this._answer = per.word;
            flag = false;
            break;
          }
        }

        if (!this._answer) {
          rawBody.channel.item[0].definition.split(' ').forEach((per) => {
            willSearchedKeywordList.push(per);
          });
        }

        searchIndex++;
      }
    }

    console.log(this._answer);
  }
}
