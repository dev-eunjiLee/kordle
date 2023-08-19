import { Inject, Injectable } from '@nestjs/common';
import {
  HANGUL_END_CHARCODE_TOKEN,
  HANGUL_START_CHARCODE_TOKEN,
} from './hangul.const';

@Injectable()
export class HangulService {
  constructor(
    @Inject(HANGUL_START_CHARCODE_TOKEN)
    private readonly hangulStartCharCode: number,
    @Inject(HANGUL_END_CHARCODE_TOKEN)
    private readonly hangulEndCharCode: number,
  ) {
    console.log(this.isHangul('가123'));
  }

  isHangul(word: string): boolean {
    let isHangul = true;
    for (const per of word) {
      const flag = this._perIsHangul(per);
      if (flag === false) {
        isHangul = false;
        break;
      }
    }
    return isHangul;
  }

  private _perIsHangul(char: string): boolean {
    const charCode = char.charCodeAt(0);
    return (
      this.hangulStartCharCode <= charCode && charCode <= this.hangulEndCharCode
    );
  }
}
