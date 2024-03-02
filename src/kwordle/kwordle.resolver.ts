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
    return this.kwordleService.checkAnswer(input);
  }
}
