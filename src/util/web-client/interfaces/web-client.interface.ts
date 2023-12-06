// 참고문서: https://tech.inflab.com/20230723-pure-http-client/
// TODO Start here
export interface WebClient {
  /**
   * HTTP METHOD
   */
  get(): this;

  /**
   * HTTP 요청을 위한 정보 설정
   */
  header(param: Record<string, string>): this;
  body(data: Record<string, unknown>): this;
}
