import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FIRST_KEYWORD } from 'src/util/consts/module-token.const';
import { WebClientService } from 'src/util/web-client/web-client.service';
import { KwordleResolver } from './kwordle.resolver';
import { KwordleService } from './kwordle.service';
import { PreKwordleService } from './pre.kwordle.service';

@Module({
  providers: [
    /**
     * Resolvers
     */
    KwordleResolver,
    /**
     * Services
     */
    KwordleService,
    PreKwordleService,
    /**
     * 상수
     */
    {
      provide: FIRST_KEYWORD,
      inject: [ConfigService, WebClientService],
      useFactory: async (
        configService: ConfigService,
        webClientService: WebClientService,
      ) => {
        const apiKey = configService.get('DICTIONARY_API_KEY');
        // https://stdict.korean.go.kr/api/search.do?certkey_no=6214&key=4AE17465F1242FA5FDCA1FC89340C153&type_search=search&req_type=json&q=%EB%82%98%EB%AC%B4

        await webClientService
          .create('https://stdict.korean.go.kr/api/search.do')
          .method('get')
          .params({
            certKey_no: configService.get('DICTIONARY_API_KEY'),
            key: '4AE17465F1242FA5FDCA1FC89340C153',
            type_search: 'search',
            req_type: 'json',
            q: '%EB%82%98%EB%AC%B4',
          })
          .retrieve();

        return '도레미';
      },
    },
  ],
})
export class KwordleModule {}
