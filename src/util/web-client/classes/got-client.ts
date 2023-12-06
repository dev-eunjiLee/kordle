import { WebClient } from '../interfaces/web-client.interface';
import got from 'got';

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
