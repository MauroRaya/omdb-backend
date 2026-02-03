import { Injectable } from '@nestjs/common';
import { EnvService } from 'src/env/env.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OmdbService {
  constructor(
    private readonly envService: EnvService,
    private readonly httpService: HttpService,
  ) {}

  async fetchByTitle(title: string) {
    const apiBaseUrl = this.envService.get<string>('OMDB_API_BASE_URL');
    const apiKey = this.envService.get<string>('OMDB_API_KEY');

    const response = await lastValueFrom(
      this.httpService.get(`${apiBaseUrl}/?apikey=${apiKey}&t=${title}`),
    );

    return response.data;
  }
}
