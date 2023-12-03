import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FIRST_KEYWORD } from 'src/util/consts/module-token.const';
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
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const apiKey = configService.get('DICTIONARY_API_KEY');
        return '도레미';
      },
    },
  ],
})
export class KwordleModule {}
