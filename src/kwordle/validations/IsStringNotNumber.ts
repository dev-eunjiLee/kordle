import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class ValidationPipeForInsertedKeyword<T> implements PipeTransform<T> {
  private readonly KEYWORD_LENGTH: number;

  constructor(option: { standardLength: number }) {
    this.KEYWORD_LENGTH = option.standardLength;
  }

  transform(value: T, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    console.log(isNaN(Number(value)));

    // NotNumberString인지 확인
    if (this.checkNotNumberString(String(value))) {
      throw Error('value must be a string, not number');
    }

    // 길이 체크
    if (this.checkLength(String(value))) {
      throw Error(`value length must be a ${this.KEYWORD_LENGTH}`);
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
