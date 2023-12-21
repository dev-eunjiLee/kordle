import { HTTP_METHOD } from '../types/method.type';

// 참고문서: https://tech.inflab.com/20230723-pure-http-client/
export abstract class WebClient {
  constructor(url: string, apiKey?: string) {
    this.option.url = url;
    this.option.apiKey = apiKey;
  }

  protected option: any;

  /**
   * HTTP METHOD
   */
  abstract method(method: HTTP_METHOD): this;

  /**
   * HTTP 요청을 위한 정보 설정
   */
  abstract header(param: Record<string, string>): this;
  abstract body(data: Record<string, unknown>): this;

  /**
   * builder 패턴으로 만들어진 WebClient를 이용해 request를 날리기
   */
  abstract retrieve(): Promise<any>;
}
