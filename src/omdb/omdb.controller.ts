import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get()
  async getByTitle(@Query('title') title: string): Promise<any> {
    return await this.omdbService.fetchByTitle(title);
  }
}
