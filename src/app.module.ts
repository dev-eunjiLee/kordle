import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KwordleModule } from './kwordle/kwordle.module';

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
    /**
     * 실제 서비스 로직
     */
    KwordleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
