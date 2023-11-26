import { Module } from '@nestjs/common';
import { KwordleResolver } from './kwordle.resolver';
import { KwordleService } from './kwordle.service';

@Module({
  providers: [KwordleResolver, KwordleService],
})
export class KwordleModule {}
