import request from 'supertest';
import { createApp } from '../src/app';

describe('Unknown Route Handler', () => {
  const app = createApp();

  it('should return 404 NOT_FOUND for undefined routes', async () => {
    const response = await request(app).get('/api/v1/does-not-exist');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: {
        code: 'NOT_FOUND',
        message: 'Route not found',
      },
    });
  });
});
