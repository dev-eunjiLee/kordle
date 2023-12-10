import { WebClient } from '../interfaces/web-client.interface';
/**
 * [모듈 호출 방식 참고 방식 공부해서 정리한 링크(ESM)](https://just-dev-poi.tistory.com/54)
 */
const got = import('got');

export class GotClient implements WebClient {
  get(): this {
    throw new Error('Method not implemented.');
  }
  header(param: Record<string, string>): this {
    throw new Error('Method not implemented.');
  }
  body(data: Record<string, unknown>): this {
    throw new Error('Method not implemented.');
  }
}
