import { Injectable, OnModuleInit } from '@nestjs/common';
import { TodayKeyword } from './types/TodayKeyword.class';

@Injectable()
export class KwordleService implements OnModuleInit {
  private readonly todayKeyword: TodayKeyword;
  constructor() {
    this.todayKeyword = new TodayKeyword();
  }

  getKeyword(): string {
    return this.todayKeyword.getKeyword();
  }
  getKeywordList(): Array<string> {
    return this.todayKeyword.getKeywordList();
  }

  answer(keyword: Array<string>): Array<Array<string>> {
    console.log(keyword);

    const answerList = this._checkAnswer(keyword);

    return [keyword, answerList];
  }

  private _checkAnswer(keyword: Array<string>): Array<string> {
    const correctAnswerList = this.getKeywordList();
    const answer: Array<'O' | 'X' | 'ㅁ'> = [];

    keyword.forEach((per, i) => {
      if (correctAnswerList[i] === per) {
        answer.push('O');
      } else {
        if (correctAnswerList.includes(per)) {
          answer.push('ㅁ');
        } else {
          answer.push('ㅁ');
        }
      }
    });

    return answer;
  }

  onModuleInit() {
    // TODO 랜덤 키워드 셋팅되도록 작업 필요
    this.todayKeyword.setKeywordAndList('한우');
  }
}
