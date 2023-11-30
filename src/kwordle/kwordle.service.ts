import { Injectable } from '@nestjs/common';
import { DisassembleStringByHangul } from 'src/common/disassembleStringByHangul';
import { SubmitAnswerInputDto } from './dtos/submitAnswer.dto';
import { PreKwordleService } from './pre.kwordle.service';

@Injectable()
export class KwordleService extends PreKwordleService {
  submitAnswer(input: SubmitAnswerInputDto) {
    const { answer } = input;

    const disassembledString = DisassembleStringByHangul(answer);

    // 길이체크
    if (disassembledString.length !== this.validLength)
      throw Error(
        `입력한 글자는 자모음을 구분한 후 ${this.validLength}여야 합니다.`,
      );

    // 순수 한글 여부 체크

    // 정답 여부 확인

    return input.answer;
  }

  getCorrectAnswer() {
    return this.answer;
  }
}
