import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//cree une instance de l'application NestJS
   app.enableCors();
  await app.listen(3000);
}
bootstrap();
