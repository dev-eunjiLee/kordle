import { Injectable, OnModuleInit } from '@nestjs/common';
import * as hangul from 'hangul-js';
import { Answer } from './answer.entity';
import {
  ANSWER_FLAG_TYPE,
  CheckAnswerInputDto,
  CheckAnswerOutputDto,
} from '../dtos/submitAnswer.dto';

@Injectable()
export class AnswerService implements OnModuleInit {
  protected ANSWER: Answer;

  /**
   * 앱 초기화할 때, 정답 셋팅
   */
  onModuleInit() {
    this.setAnswer();
  }

  setAnswer(): void {
    const answer = this._getAnswer();
    this.ANSWER = answer;
  }

  checkAnswer(input: CheckAnswerInputDto): CheckAnswerOutputDto {
    console.log(input);

    const correctList: Array<ANSWER_FLAG_TYPE> = [];

    let outFlag = true;

    /**
     * TODO 아래 로직을 쓰면 답이 고구마일 때, ["ㅅ","ㅓ","ㅣ","ㄱ","ㅕ","ㅣ"]가 ['BALL', 'OUT', 'BALL', 'OUT', 'OUT', 'OUT']로 나와서 수정이 필요함
     */

    for (const index in this.ANSWER.splittedKeyword) {
      let status!: ANSWER_FLAG_TYPE;
      const correctChar = this.ANSWER.splittedKeyword[index];
      if (input.answer[index] === correctChar) {
        status = 'STRIKE';
      } else {
        for (const answerIndex in input.answer) {
          if (answerIndex !== index) {
            if (correctChar === input.answer[answerIndex]) {
              status = 'BALL';
              break;
            }
          }
        }
      }
      if (status === undefined) {
        status = 'OUT';
      }

      correctList.push(status);
    }

    const output: CheckAnswerOutputDto = {
      correctFlag: true,
      correctList: ['STRIKE', 'STRIKE', 'STRIKE', 'STRIKE', 'STRIKE', 'STRIKE'],
      answer: '고구마',
    };
    return output;
  }

  private _checkAnswer(splittedAnswer: string[]): void {
    /**
     * TODO 정답으로 셋팅할 키워드를 체크할 때 점검해야하는 부분들 추가 필요
     */
    if (splittedAnswer.length !== 6)
      throw Error('키워드를 다시 확인해주세요 (사유: 정답의 길이)');
    splittedAnswer.forEach((char: string) => {
      if (!isNaN(Number(char)))
        throw Error('키워드를 다시 확인해주세요 (사유: 숫자 포함)');
    });
  }

  private _getAnswer(): Answer {
    /**
     * TODO 우선 기능 구현을 위해 임의로 정답 목록을 만들어두었으나, 추후에 외부의 국어사전 API를 활용해서 답을 셋팅할 예정
     */
    const answerList = [
      '세계',
      '고구마',
      '피아노',
      '빵틀',
      '달력',
      '한글',
      '짠지',
    ];

    const day = new Date().getDay();

    let index = day;
    let flag = true;
    let answer!: string;
    let splittedAnswer!: Array<string>;
    while (flag)
      try {
        answer = answerList[index];
        splittedAnswer = hangul.disassemble(answer);
        this._checkAnswer(splittedAnswer);
        flag = false;
      } catch (e) {
        console.error(e);
        index++;
        if (index >= answerList.length) {
          index = 0;
        }
      }

    if (!answer || !splittedAnswer) {
      throw Error('정답이 제대로 설정되지 않았습니다.');
    }

    return { keyword: answer, splittedKeyword: splittedAnswer };
  }
}
