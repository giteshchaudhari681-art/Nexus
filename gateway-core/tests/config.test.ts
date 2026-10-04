import { loadConfig } from '../src/config';

describe('Configuration Loader', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('should load default values when environment variables are not set', () => {
    delete process.env.PORT;
    delete process.env.HOST;
    delete process.env.ENVIRONMENT;

    const config = loadConfig();
    expect(config.port).toBe(8000);
    expect(config.host).toBe('0.0.0.0');
    expect(config.environment).toBe('development');
  });

  it('should override defaults with environment variables', () => {
    process.env.PORT = '9000';
    process.env.HOST = '127.0.0.1';
    process.env.ENVIRONMENT = 'production';

    const config = loadConfig();
    expect(config.port).toBe(9000);
    expect(config.host).toBe('127.0.0.1');
    expect(config.environment).toBe('production');
  });

  it('should throw an error for an invalid PORT', () => {
    process.env.PORT = 'abc';
    expect(() => loadConfig()).toThrow(/Invalid PORT configuration/);
  });
});
