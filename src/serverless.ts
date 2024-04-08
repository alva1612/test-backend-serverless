import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { ApiResponseInterceptor } from './common/interceptors/api-wrapper.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ApiResponseInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Test Serverless Backend')
    .addServer('http://localhost:3000/dev', 'Local Development')
    .setDescription(
      'Backend for a test serverless application. For use only in development.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (process.env.IS_OFFLINE === 'true') {
    SwaggerModule.setup('api', app, document);
  }

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
