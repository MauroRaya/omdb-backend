import { Inject, Injectable } from '@nestjs/common';
import { EnvService } from 'src/env/env.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class OmdbService {
  constructor(
    private readonly envService: EnvService,
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  async fetchByTitle(title: string) {
    const value = await this.cacheManager.get(title);
    if (value) {
      return value;
    }

    const apiBaseUrl = this.envService.get<string>('OMDB_API_BASE_URL');
    const apiKey = this.envService.get<string>('OMDB_API_KEY');

    const { data } = await lastValueFrom(
      this.httpService.get(`${apiBaseUrl}/?apikey=${apiKey}&t=${title}`),
    ) ?? {};

    await this.cacheManager.set(title, data, 1000 * 60 * 5);
    return data;
  }
}