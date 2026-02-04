import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env/env.validate';
import { EnvModule } from './env/env.module';
import { OmdbModule } from './omdb/omdb.module';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    EnvModule,
    OmdbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
