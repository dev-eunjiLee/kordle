import { Module } from '@nestjs/common';
import { KwordleController } from './kwordle.controller';
import { KwordleService } from './kwordle.service';

@Module({
  controllers: [KwordleController],
  providers: [KwordleService],
})
export class KwordleModule {}
