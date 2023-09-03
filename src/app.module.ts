import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KwordleModule } from './kwordle/kwordle.module';

@Module({
  imports: [KwordleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
