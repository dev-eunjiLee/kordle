import { Module } from '@nestjs/common';
import { KwordleController } from './kwordle.controller';

@Module({
  controllers: [KwordleController],
})
export class KwordleModule {}
