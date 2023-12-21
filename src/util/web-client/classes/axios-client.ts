import axios from 'axios';
import { WebClient } from '../interfaces/web-client.interface';
import { HTTP_METHOD } from '../types/method.type';

export class AxiosClient extends WebClient {
  url(url: string): this {
    throw new Error('Method not implemented.');
  }
  method(method: HTTP_METHOD): this {
    this.option.method = method;
    return this;
  }
  header(param: Record<string, string>): this {
    throw new Error('Method not implemented.');
  }
  body(data: Record<string, unknown>): this {
    throw new Error('Method not implemented.');
  }

  // 필수 키 체크
  private _checkRequiredKey(insertedOptionKeyList: string[]): boolean {
    const requiredKeyList = ['method', 'header'];
    const insertedRequiredKeyList = [];
    Object.keys(this.option).forEach((key) => {
      if (requiredKeyList.includes(key)) insertedRequiredKeyList.push(key);
    });
    let checkResult = true;
    if (insertedRequiredKeyList.length !== requiredKeyList.length) {
      checkResult = false;
    }
    return checkResult;
  }

  // retrieve: 검색하다
  // builder 패턴으로 만들어진 Client를 이용해 최종적으로 Http Request를 날려 요청을 받는다
  async retrieve(): Promise<any> {
    const insertedOptionKeyList = Object.keys(this.option);
    throw new Error('Method not implemented.');
  }
}
