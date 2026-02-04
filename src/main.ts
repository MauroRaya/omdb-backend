import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureSwagger } from './config/swagger.config';
import { EnvService } from './env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureSwagger(app);

  const envService = app.get(EnvService);
  const port = envService.get<number>('PORT');

  await app.listen(port);
}
void bootstrap();
