import { Controller, Get, Param } from '@nestjs/common';
import { ValidationPipeForInsertedKeyword } from './validations/validationPipeForinsertedKeyword';

@Controller('kwordle')
export class KwordleController {
  @Get('/:keyword')
  insert(
    @Param(
      'keyword',
      new ValidationPipeForInsertedKeyword({ standardLength: 5 }),
    )
    keyword: string,
  ) {
    console.log(keyword);
  }
}
