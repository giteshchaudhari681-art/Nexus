import request from 'supertest';
import { createApp } from '../src/app';

describe('Health Endpoint', () => {
  const app = createApp();

  it('should return 200 OK with machine-readable status', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
    expect(response.headers['content-type']).toMatch(/json/);
  });
});
