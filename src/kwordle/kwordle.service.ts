import { Injectable, OnModuleInit } from '@nestjs/common';
import { TodayKeyword } from './types/TodayKeyword.class';

@Injectable()
export class KwordleService implements OnModuleInit {
  private readonly todayKeyword: TodayKeyword;
  constructor() {
    this.todayKeyword = new TodayKeyword();
  }

  getKeyword(): string {
    return this.todayKeyword.getKeyword();
  }

  onModuleInit() {
    // TODO 랜덤 키워드 셋팅되도록 작업 필요
    this.todayKeyword.setKeyword('ㅎㅏㄴㅇㅜ');
  }
}
