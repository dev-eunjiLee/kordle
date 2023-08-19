import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KwordleService } from './kwordle.service';
import { ValidationPipeForInsertedKeyword } from './validations/validationPipeForinsertedKeyword';

@Controller('kwordle')
export class KwordleController {
  constructor(private readonly kwordleService: KwordleService) {}

  @Get()
  get() {
    return this.kwordleService.getKeyword();
  }

  @Post('/:keyword')
  answer(
    @Body(
      'keyword',
      new ValidationPipeForInsertedKeyword({ standardLength: 5 }),
    )
    keyword: string[],
  ): Array<Array<string>> {
    return this.kwordleService.answer(keyword);
  }
}
