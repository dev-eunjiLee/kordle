import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FIRST_KEYWORD } from 'src/util/consts/module-token.const';
import { WebClientService } from 'src/util/web-client/web-client.service';
import { AnswerService } from './answer/answer.service';
import { KwordleResolver } from './kwordle.resolver';
import { KwordleService } from './kwordle.service';

@Module({
  providers: [
    /**
     * Resolvers
     */
    KwordleResolver,
    /**
     * Services
     */
    KwordleService,
    AnswerService,
  ],
})
export class KwordleModule {}
