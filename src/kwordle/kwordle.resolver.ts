import { Query, Resolver } from '@nestjs/graphql';
import { KwordleService } from './kwordle.service';

@Resolver(() => KwordleResolver)
export class KwordleResolver {
  constructor(private readonly kwordleService: KwordleService) {}
  @Query(() => String, { nullable: true, description: '쿼들 답안 제출' })
  submitAnswer() {
    return this.kwordleService.submitAnswer();
  }

  @Query(() => String, { nullable: true, description: '쿼들 정답 확인' })
  getCorrectAnswer() {
    return this.kwordleService.getCorrectAnswer();
  }
}
