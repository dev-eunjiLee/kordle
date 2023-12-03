import { Injectable } from '@nestjs/common';
import { DisassembleStringByHangul } from 'src/common/disassembleStringByHangul';
import {
  SubmitAnswerInputDto,
  SubmitAnswerOutputDto,
} from './dtos/submitAnswer.dto';
import { PreKwordleService } from './pre.kwordle.service';

@Injectable()
export class KwordleService extends PreKwordleService {
  submitAnswer(input: SubmitAnswerInputDto): SubmitAnswerOutputDto {
    const { answer } = input;

    const disassembledString = DisassembleStringByHangul(answer);

    // 길이체크
    if (disassembledString.length !== this.validLength)
      throw Error(
        `입력한 글자는 자모음을 구분한 후 ${this.validLength}여야 합니다.`,
      );

    // 순수 한글 여부 체크
    const regex = /^[ㄱ-ㅎ가-힣]+$/;
    if (!regex.test(input.answer))
      throw Error('입력한 글자는 한글로만 되어있어야 합니다.');

    // 정답 여부 확인
    let output: SubmitAnswerOutputDto;
    if (this.answer !== input.answer) {
      output = {
        correctFlag: false,
        correctList: this.disassembledAnswer.map((char, index) => {
          return disassembledString[index] === char ? 'O' : 'X';
        }),
      };
    } else {
      output = {
        correctFlag: true,
        correctList: ['O', 'O', 'O', 'O', 'O'],
      };
    }

    return output;
  }

  getCorrectAnswer() {
    return this.answer;
  }
}
