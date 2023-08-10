import { Controller, Get, Param } from '@nestjs/common';
import { IsString } from 'class-validator';

export class InsertedKeywordValidation {
  // TODO 숫자 string은 제외하도록
  // TODO validation 클래스 파일 분리
  @IsString()
  keyword: string;
}

@Controller('kwordle')
export class KwordleController {
  @Get('insert/:keyword')
  insert(@Param() params: InsertedKeywordValidation) {
    console.log(params);
  }
}
