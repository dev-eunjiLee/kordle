import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * ValidationPipe로 자동으로 데이터 교정하기
       * 참고 링크: https://docs.nestjs.com/techniques/validation#transform-payload-objects
       */
      transform: true, //
    }),
  );
  app.setGlobalPrefix('v1');
  await app.listen(3000);
}
bootstrap();
