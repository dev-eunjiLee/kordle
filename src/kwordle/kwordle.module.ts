import { Module } from '@nestjs/common';
import { AnswerService } from './answer/answer.service';
import { KwordleResolver } from './kwordle.resolver';

@Module({
  providers: [
    /**
     * Resolvers
     */
    KwordleResolver,
    /**
     * Services
     */
    AnswerService,
  ],
})
export class KwordleModule {}
