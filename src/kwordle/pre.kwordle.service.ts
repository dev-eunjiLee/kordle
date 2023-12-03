import { Injectable } from '@nestjs/common';
import { DisassembleStringByHangul } from 'src/common/disassembleStringByHangul';

@Injectable()
export class PreKwordleService {
  constructor() {
    this.answer = '이름';
    this.validLength = 5;
  }

  /**
   * _answer, _validLength
   * private 필드이기 때문에 해당 속성 값을 읽고 수정하는 getter, setter로 접근
   */

  /**
   * 정답 필드
   */
  private _answer: string;

  get answer(): string {
    return this._answer;
  }

  set answer(input: string) {
    this._answer = input;
    this.disassembledAnswer = DisassembleStringByHangul(input);
  }

  /**
   * 정답을 분해한 필드
   */

  private _disassembledAnswer: Array<string>;

  get disassembledAnswer(): Array<string> {
    return this._disassembledAnswer;
  }

  set disassembledAnswer(input: Array<string>) {
    this._disassembledAnswer = input;
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
