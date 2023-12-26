import { Injectable } from '@nestjs/common';
import { AxiosClient } from './classes/axios-client';
import { WebClient } from './abstract.class/web-client.abstract.class';

export abstract class WebClientService {
  abstract create(url: string): WebClient;
}

@Injectable()
export class AxiosClientService implements WebClientService {
  create(url: string): AxiosClient {
    return new AxiosClient(url);
  }
}
