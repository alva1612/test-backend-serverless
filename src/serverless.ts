import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { ApiResponseInterceptor } from './common/interceptors/api-wrapper.interceptor';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ApiResponseInterceptor());
  await app.init();

  const server = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: server });
}
bootstrap();

const handler: Handler = async (
  event,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

export { handler };
