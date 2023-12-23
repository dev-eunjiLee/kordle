import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { WebClient } from '../abstract.class/web-client.abstract.class';
import { HTTP_METHOD } from '../types/method.type';
import { WebResponse } from './web-response.class';

export class AxiosClient extends WebClient {
  protected option: AxiosRequestConfig;

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
  params(params: Record<string, unknown>): this {
    this.option.params = params;
    return this;
  }

  async retrieve(): Promise<WebResponse> {
    const result = await axios({
      ...this.option,
    });
    const { status: statusCode, data: body, ...extraInfo } = result;
    const res = new WebResponse(statusCode, body, extraInfo);
    return res;
  }
}
