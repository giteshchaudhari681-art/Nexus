import dotenv from 'dotenv';

dotenv.config();

export interface Config {
  port: number;
  host: string;
  environment: string;
}

export function loadConfig(): Config {
  const portStr = process.env.PORT || '8000';
  const port = parseInt(portStr, 10);

  if (isNaN(port)) {
    throw new Error(`Invalid PORT configuration: '${portStr}' is not a number.`);
  }

  return {
    port,
    host: process.env.HOST || '0.0.0.0',
    environment: process.env.ENVIRONMENT || 'development',
  };
}

export const config = loadConfig();
