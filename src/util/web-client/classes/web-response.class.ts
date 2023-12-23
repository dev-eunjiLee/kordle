/**
 * @description
 * - 모든 웹 호출의 응답을 처리하기 위한 클래스.
 * - 어떤 패키지로 API를 호출했건 응답을 이 형태로 변경하여 사용
 * - 다른 Http 패키지를 사용하더라도 대응이 가능하다
 */
export class WebResponse {
  constructor(
    private readonly _statusCode: number,
    private readonly _body: string,
    private readonly _extraInfo: unknown,
  ) {}

  /**
   * @description 상태코드
   */
  get statusCode() {
    return this._statusCode;
  }

  /**
   * @description 실제 넘어온 데이터
   */
  get rawBody() {
    return this._body;
  }

  /**
   * @description 그 외 넘어온 모든 정보
   */
  get extraInfo() {
    return this._extraInfo;
  }
}
