import { Injectable } from '@nestjs/common';
import {
  CheckAnswerInputDto,
  CheckAnswerOutputDto,
} from './dtos/submitAnswer.dto';

@Injectable()
export class KwordleService {
  checkAnswer(input: CheckAnswerInputDto): CheckAnswerOutputDto {
    const output: CheckAnswerOutputDto = {
      correctFlag: true,
      correctList: ['STRIKE', 'STRIKE', 'STRIKE', 'STRIKE', 'STRIKE', 'STRIKE'],
      answer: '세계',
    };
    return output;
  }
}
