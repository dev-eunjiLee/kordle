import { Injectable } from '@nestjs/common';
import { AxiosClient } from './classes/axios-client';
import { WebClient } from './interfaces/web-client.interface';

export abstract class WebClientService {
  abstract create(url: string): WebClient;
}

@Injectable()
export class AxiosClientService implements WebClientService {
  create(url: string): WebClient {
    return new AxiosClient(url);
  }
}
