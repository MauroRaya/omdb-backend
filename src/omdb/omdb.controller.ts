import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { FetchByTitleDTO } from './dto/fetch-by-title.dto';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get()
  async getByTitle(@Query('title') title: string): Promise<FetchByTitleDTO> {
    return await this.omdbService.fetchByTitle(title);
  }
}
