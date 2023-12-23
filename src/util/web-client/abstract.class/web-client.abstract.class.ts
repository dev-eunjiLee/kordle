import { HTTP_METHOD } from '../types/method.type';

/**
 * @ref [참고문서](https://tech.inflab.com/20230723-pure-http-client/)
 * @description 어떤 Http 통신 패키지를 사용하더라도 유연하게 사용할 수 있도록 커스텀한 추상 클래스
 */
export abstract class WebClient {
  constructor(url: string) {
    this.option = {
      url: url,
    };
  }

  /**
   * @description builder 패턴으로 옵션들이 셋팅된다.
   */
  protected option: Record<string, any>;

  /**
   * @description HTTP METHOD 셋팅(builder)
   */
  abstract method(method: HTTP_METHOD): this;

  /**
   * @description HTTP 요청을 위한 header 설정(builder)
   */
  abstract header(param: Record<string, string>): this;

  /**
   * @description HTTP 요청을 위한 body 설정(builder)
   */
  abstract body(data: Record<string, unknown>): this;

  /**
   * @description HTTP 요청을 위한 params 설정하는 함수(builder)
   */
  abstract params(prams: Record<string, unknown>): this;

  /**
   * @description builder 패턴으로 셋팅된 옵션대로 request를 날리는 함수
   * @detail retrieve: 검색하다
   */
  abstract retrieve(): Promise<any>;
}
