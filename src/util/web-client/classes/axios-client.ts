import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { WebClient } from '../abstract.class/web-client.abstract.class';
import { HTTP_METHOD } from '../types/method.type';

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

  async retrieve(): Promise<AxiosResponse> {
    const result = await axios({
      ...this.option,
    });
    return result;
  }
}
