import { PipeTransform } from '@nestjs/common';
import HANGUL from 'src/common/hangul';

export class ValidationPipeForInsertedKeyword<T> implements PipeTransform<T> {
  private readonly KEYWORD_LENGTH: number;

  constructor(option: { standardLength: number }) {
    this.KEYWORD_LENGTH = option.standardLength;
  }

  transform(value: T) {
    // NotNumberString인지 확인
    if (this.checkNotNumberString(String(value))) {
      throw Error('keyword must be a string, not number');
    }

    // 길이 체크
    if (this.checkLength(String(value))) {
      throw Error(`keyword length must be a ${this.KEYWORD_LENGTH}`);
    }

    if (!HANGUL.isHangul(String(value))) {
      throw Error(`characters in keyword must be a HANGUL`);
    }

    return value;
  }

  private checkNotNumberString(value: string): boolean {
    return isNaN(Number(value)) === false;
  }

  private checkLength(value: string): boolean {
    // TODO 자모음 구분해서 5자인지 확인
    return String(value).length !== this.KEYWORD_LENGTH;
  }
}
