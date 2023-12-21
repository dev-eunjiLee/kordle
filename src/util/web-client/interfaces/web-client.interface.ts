import { HTTP_METHOD } from '../types/method.type';

// 참고문서: https://tech.inflab.com/20230723-pure-http-client/
export abstract class WebClient {
  constructor(url: string) {
    console.log(url);
    this.option = {
      url: url,
    };
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
  abstract params(prams: Record<string, unknown>): this;

  /**
   * builder 패턴으로 만들어진 WebClient를 이용해 request를 날리기
   */
  abstract retrieve(): Promise<any>;
}
