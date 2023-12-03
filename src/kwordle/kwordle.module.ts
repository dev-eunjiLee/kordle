import { Module } from '@nestjs/common';
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
      provide: 'FIRST_KEYWORD',
      useValue: '도레미',
    },
  ],
})
export class KwordleModule {}
