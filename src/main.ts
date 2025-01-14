import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03.00'; 

  //habilitando globalmente  a validação de dados
  app.useGlobalPipes(new ValidationPipe());

  //habilitando o Cors na aplicação feito para linkar o back com o front sendo hospedados em hosts diferentes
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
