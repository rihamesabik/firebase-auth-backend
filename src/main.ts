import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//cree une instance de l'application NestJS
  await app.listen(3000);
}
bootstrap();
