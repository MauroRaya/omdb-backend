import { IsNotEmpty, IsPort } from 'class-validator';

export class EnvironmentVariables {
  @IsNotEmpty()
  OMDB_API_BASE_URL: string;

  @IsNotEmpty()
  OMDB_API_KEY: string;

  @IsPort()
  PORT: number;
}
