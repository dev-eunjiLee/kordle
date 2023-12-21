import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KwordleModule } from './kwordle/kwordle.module';
import { WebClientModule } from './util/web-client/web-client.module';

@Module({
  imports: [
    /**
     * util
     */
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      useGlobalPrefix: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal: true,
      validationSchema: Joi.object({
        DICTIONARY_API_KEY: Joi.string().required(),
      }),
      validationOptions: {
        /**
         * abortEarly
         * - true: (Default) 환경변수를 확인하다가 첫번째 에러를 발견하면 그 즉시 에러를 리턴
         * - false: 환경변수 확인 중 에러가 발생하더라도 전체를 다 확인한 후 모아서 에러를 리턴
         */
        abortEarly: false, // false인 경우 validationSchema에 지정된 모든 키를 다 확인한 후 모아서 에러를 준다
      },
    }),
    WebClientModule,
    /**
     * 실제 서비스 로직
     */
    KwordleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
