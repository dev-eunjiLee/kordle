import { Module } from '@nestjs/common';
import {
  HANGUL_END_CHARCODE_TOKEN,
  HANGUL_START_CHARCODE_TOKEN,
} from './hangul.const';
import { HangulService } from './hangul.service';

@Module({
  providers: [
    HangulService,
    {
      provide: HANGUL_START_CHARCODE_TOKEN,
      useValue: '가'.charCodeAt(0),
    },
    {
      provide: HANGUL_END_CHARCODE_TOKEN,
      useValue: '힣'.charCodeAt(0),
    },
  ],
})
export class HangulModule {}
