import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HangulModule } from './common/hangul/hangul.module';
import { KwordleModule } from './kwordle/kwordle.module';

@Module({
  imports: [KwordleModule, HangulModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
