import "reflect-metadata"  // IMPORTANTE
import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // transforma os dados pra tipagem correta
      whitelist: true,
      forbidNonWhitelisted: true, 
      
      // esse parÂmero (forbidNonWhitelisted: true) serve pro caso de quando no projeto alguém por engano permite que sejam cadastrados atributos alés dos pré-definidos anteriormente. ELe não renderiza oa atributos extras, mas aceita o "pré-request", avisando que o atribut extra da lista não deveria estar ali.
    })
  );

  
  await app.listen(3000);
}
bootstrap();
