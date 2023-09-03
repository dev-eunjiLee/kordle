import { Body, Controller, Get, Post } from '@nestjs/common';
import { KwordleService } from './kwordle.service';
import { ValidationPipeForInsertedKeyword } from './validations/validationPipeForinsertedKeyword';

@Controller('kwordle')
export class KwordleController {
  constructor(private readonly kwordleService: KwordleService) {}

  @Get()
  get() {
    return this.kwordleService.getKeyword();
  }

  @Post('/answer')
  answer(
    @Body(
      'userRequest',
      new ValidationPipeForInsertedKeyword({ standardLength: 5 }),
    )
    @Body()
    body: any,
    // body: KAKAO_SKILL_PAYLOAD,
  ): Array<Array<string>> {
    console.log(body);
    return [['a'], ['b']];
    // return this.kwordleService.answer(keyword);
  }
}
