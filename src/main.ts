import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const options = {
  origin: [
    'https://heleno.dev', 
    'http://localhost:3000', 
    'https://amei.helenosalgado19.workers.dev'
  ],
  methods: "POST",
  credentials: true,
  optionsSuccessStatus: 200,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['X-Requested-With', 'Content-Type', 'Accept'],
    origin: ['https://heleno.dev', 'http://localhost:3000', 'https://amei.helenosalgado19.workers.dev'],
    methods: ['POST', 'GET'],
    credentials: true,
    optionsSuccessStatus: 200,
  });

  // Remoção automática de propriedades sem decoradores - DTO
  // Ativar validação de erros no corpo da solicitação - class-validator
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(3001).then(async()=> { console.log(await app.getUrl()) });
}
bootstrap();
