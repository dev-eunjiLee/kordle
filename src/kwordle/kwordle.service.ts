import { Injectable } from '@nestjs/common';
import { SubmitAnswerInputDto } from './dtos/submitAnswer.dto';

@Injectable()
export class KwordleService {
  submitAnswer(input: SubmitAnswerInputDto) {
    return input.answer;
  }

  getCorrectAnswer() {
    return 'hi';
  }
}
