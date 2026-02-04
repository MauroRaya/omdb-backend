import { IsIn, IsNotEmpty, IsPort } from 'class-validator';

export const environments = ['development', 'production'] as const;
export type Environment = (typeof environments)[number];

export class EnvironmentVariables {
  @IsIn(environments)
  NODE_ENV: Environment;

  @IsNotEmpty()
  OMDB_API_BASE_URL: string;

  @IsNotEmpty()
  OMDB_API_KEY: string;

  @IsPort()
  PORT: number;
}
