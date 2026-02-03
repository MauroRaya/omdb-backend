import { Module } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { OmdbController } from './omdb.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [OmdbService],
  controllers: [OmdbController],
})
export class OmdbModule {}
