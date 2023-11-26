import { Module } from '@nestjs/common';
import { KwordleResolver } from './kwordle.resolver';

@Module({
  providers: [KwordleResolver],
})
export class KwordleModule {}
