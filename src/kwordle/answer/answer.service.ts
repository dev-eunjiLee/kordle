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
    return new Answer('나무', '나무');
  }
}
