import { Args, Query, Resolver } from '@nestjs/graphql';
import { INPUT } from 'src/util/consts/graphql-input.const';
import {
  SubmitAnswerInputDto,
  SubmitAnswerOutputDto,
} from './dtos/submitAnswer.dto';
import { KwordleService } from './kwordle.service';

@Resolver(() => KwordleResolver)
export class KwordleResolver {
  constructor(private readonly kwordleService: KwordleService) {}
  @Query(() => SubmitAnswerOutputDto, {
    description: '쿼들 답안 제출',
  })
  submitAnswer(
    @Args(INPUT) input: SubmitAnswerInputDto,
  ): SubmitAnswerOutputDto {
    const output: SubmitAnswerOutputDto = {
      correctFlag: true,
      correctList: ['STRIKE', 'STRIKE', 'STRIKE', 'STRIKE', 'STRIKE', 'STRIKE'],
      answer: '세계',
    };
    console.log(output);
    return output;
  }

  @Query(() => String, { nullable: true, description: '쿼들 정답 확인' })
  getCorrectAnswer() {
    // return this.kwordleService.getCorrectAnswer();
  }
}
