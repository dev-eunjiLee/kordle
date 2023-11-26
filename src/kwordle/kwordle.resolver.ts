import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class KwordleResolver {
  @Query(() => String, { nullable: true, description: '쿼들 답안 제출' })
  submitAnswer() {
    return 'hi';
  }

  @Query(() => String, { nullable: true, description: '쿼들 정답 확인' })
  getCorrectAnswer() {
    return 'hi';
  }
}
