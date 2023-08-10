import { Controller, Get, Param } from '@nestjs/common';

@Controller('kwordle')
export class KwordleController {
  @Get('insert/:keyword')
  insert(@Param('keyword') keyword: string) {
    console.log(keyword);
  }
}
