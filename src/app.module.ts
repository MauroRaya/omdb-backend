import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvModule } from './env/env.module';
import { OmdbModule } from './omdb/omdb.module';
import { validate } from './env/env.validate';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate
    }),
    EnvModule,
    OmdbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
