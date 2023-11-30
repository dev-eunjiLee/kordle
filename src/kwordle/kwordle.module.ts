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
  ],
})
export class KwordleModule {}
