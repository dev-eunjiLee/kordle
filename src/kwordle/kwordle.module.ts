import { Module } from '@nestjs/common';
import { FIRST_KEYWORD } from 'src/util/consts/module-token.const';
import { KwordleResolver } from './kwordle.resolver';
import { KwordleService } from './kwordle.service';
import { PreKwordleService } from './pre.kwordle.service';

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
    PreKwordleService,
    /**
     * 상수
     */
    {
      provide: FIRST_KEYWORD,
      useValue: '도레미',
    },
  ],
})
export class KwordleModule {}
