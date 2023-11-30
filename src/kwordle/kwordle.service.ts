import { Injectable } from '@nestjs/common';
import { DisassembleStringByHangul } from 'src/common/disassembleStringByHangul';
import { SubmitAnswerInputDto } from './dtos/submitAnswer.dto';

@Injectable()
export class KwordleService {
  /**
   * 정답 필드
   * private 필드이기 때문에 해당 속성 값을 읽고 수정하는 getter, setter로 접근
   */
  private _answer: string;

  get answer(): string {
    return this._answer;
  }

  set answer(input: string) {
    this._answer = input;
  }

  submitAnswer(input: SubmitAnswerInputDto) {
    const { answer } = input;

    const disassembledString = DisassembleStringByHangul(answer);

    // 길이체크

    // 순수 한글 여부 체크

    // 정답 여부 확인

    return input.answer;
  }

  getCorrectAnswer() {
    return this.answer;
  }
}
