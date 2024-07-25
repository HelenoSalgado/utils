import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { allowOrigins } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: allowOrigins,
    methods: ['POST', 'GET'],
    credentials: true,
    optionsSuccessStatus: 200,
  });

  // Remoção automática de propriedades sem decoradores - DTO
  // Ativar validação de erros no corpo da solicitação - class-validator
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(3001).then(async()=> { 
    console.log(await app.getUrl()) ;
    console.log(app.flushLogs());
  });
}
bootstrap();
