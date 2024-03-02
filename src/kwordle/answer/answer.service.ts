import { Injectable, OnModuleInit } from '@nestjs/common';
import { DisassembleStringByHangul } from 'src/util/functions/disassembleStringByHangul';

@Injectable()
export class AnswerService implements OnModuleInit {
  protected ANSWER: string;
  protected SPLITTED_ANSWER: string[];

  /**
   * 앱 초기화할 때, 정답 셋팅
   */
  onModuleInit() {
    this.setAnswer();
  }

  setAnswer(): boolean {
    const answer = this._getAnswer();
    const splittedAnswer = DisassembleStringByHangul(answer);

    this.ANSWER = answer;
    this.SPLITTED_ANSWER = splittedAnswer;

    return true;
  }

  private _checkAnswer(splittedAnswer: string[]): void {
    /**
     * ANCHOR 정답으로 셋팅할 키워드를 체크할 때 점검해야하는 부분들 추가 필요
     */
    if (splittedAnswer.length !== 6)
      throw Error('키워드를 다시 확인해주세요 (사유: 정답의 길이)');
    splittedAnswer.forEach((char: string) => {
      if (!isNaN(Number(char)))
        throw Error('키워드를 다시 확인해주세요 (사유: 숫자 포함)');
    });
  }

  private _getAnswer(): string {
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
    while (flag)
      try {
        answer = answerList[index];
        const splittedAnswer = hangul.disassemble(answer);
        this._checkAnswer(splittedAnswer);
        flag = false;
      } catch (e) {
        console.error(e);
        index++;
        if (index >= answerList.length) {
          index = 0;
        }
      }
    return answer;
  }
}
