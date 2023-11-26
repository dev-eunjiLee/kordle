import { Args, Query, Resolver } from '@nestjs/graphql';
import { INPUT } from 'src/util/const';
import { SubmitAnswerInputDto } from './dtos/submitAnswer.dto';
import { KwordleService } from './kwordle.service';

@Resolver(() => KwordleResolver)
export class KwordleResolver {
  constructor(private readonly kwordleService: KwordleService) {}
  @Query(() => String, {
    description: '쿼들 답안 제출',
  })
  submitAnswer(@Args(INPUT) input: SubmitAnswerInputDto) {
    return this.kwordleService.submitAnswer(input);
  }

  @Query(() => String, { nullable: true, description: '쿼들 정답 확인' })
  getCorrectAnswer() {
    return this.kwordleService.getCorrectAnswer();
  }
}
