import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03.00'; 

  //habilitando globalmente  a validação de dados
  app.useGlobalPipes(new ValidationPipe());

  //habilitando o Cors na aplicação feito para linkar o back com o front sendo hospedados em hosts diferentes
  app.enableCors();

  await app.listen(process.env.PORT ?? 5432);
}
bootstrap();
