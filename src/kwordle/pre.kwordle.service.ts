import { Injectable } from '@nestjs/common';
import { DisassembleStringByHangul } from 'src/common/disassembleStringByHangul';

@Injectable()
export class PreKwordleService {
  constructor() {
    this.rightAnswer = '이름';
    this.validLength = 5;
  }

  /**
   * _answer, _validLength
   * private 필드이기 때문에 해당 속성 값을 읽고 수정하는 getter, setter로 접근
   */

  /**
   * 정답 필드
   */
  private _rightAnswer: string;

  get rightAnswer(): string {
    return this._rightAnswer;
  }

  set rightAnswer(input: string) {
    this._rightAnswer = input;
    this.rightAnswerList = DisassembleStringByHangul(input);
  }

  /**
   * 정답을 분해한 필드
   */

  private _rightAnswerList: Array<string>;

  get rightAnswerList(): Array<string> {
    return this._rightAnswerList;
  }

  set rightAnswerList(input: Array<string>) {
    this._rightAnswerList = input;
  }

  /**
   * 길이 필드
   */
  private _validLength: number;

  get validLength(): number {
    return this._validLength;
  }

  set validLength(input: number) {
    this._validLength = input;
  }
}
