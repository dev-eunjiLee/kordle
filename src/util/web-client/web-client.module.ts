import { Global, Module } from '@nestjs/common';
import { AxiosClientService, WebClientService } from './web-client.service';

@Global()
@Module({
  providers: [
    {
      provide: WebClientService,
      useClass: AxiosClientService,
    },
  ],
  exports: [WebClientService],
})
export class WebClientModule {}
