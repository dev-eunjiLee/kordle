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

  answer(keyword: string) {
    const correctAnswer = this.getKeyword();

    // TODO 키워드 자모음 분리 후 키워드와 비교

    return correctAnswer === keyword;
  }

  onModuleInit() {
    // TODO 랜덤 키워드 셋팅되도록 작업 필요
    this.todayKeyword.setKeyword('ㅎㅏㄴㅇㅜ');
  }
}
