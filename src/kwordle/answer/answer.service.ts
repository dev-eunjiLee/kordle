import { Inject, Injectable } from '@nestjs/common';
import { FIRST_KEYWORD } from 'src/util/consts/module-token.const';
import { DisassembleStringByHangul } from 'src/util/functions/disassembleStringByHangul';

@Injectable()
export class AnswerService {
  constructor(
    @Inject(FIRST_KEYWORD)
    private readonly firstKeyword: string,
  ) {
    this.rightAnswer = firstKeyword;
    this.rightAnswerList = DisassembleStringByHangul(firstKeyword);
    this.rightAnswerLength = this.rightAnswerList.length;
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
  private _rightAnswerLength: number;

  get rightAnswerLength(): number {
    return this._rightAnswerList.length;
  }

  set rightAnswerLength(input: number) {
    this._rightAnswerLength = input;
  }
}
