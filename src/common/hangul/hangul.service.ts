import { Inject, Injectable } from '@nestjs/common';
import {
  HANGUL_END_CHARCODE_TOKEN,
  HANGUL_START_CHARCODE_TOKEN,
} from './hangul.const';

@Injectable()
export class HangulService {
  constructor(
    @Inject(HANGUL_START_CHARCODE_TOKEN)
    private readonly hangulStartCharCode: string,
    @Inject(HANGUL_END_CHARCODE_TOKEN)
    private readonly hangulEndCharCode: string,
  ) {
    this.isHangul();
  }
  isHangul() {
    console.log(this.hangulStartCharCode);
    console.log(this.hangulEndCharCode);
  }
}
