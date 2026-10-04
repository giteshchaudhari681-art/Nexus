import express, { Application, Request, Response, NextFunction } from 'express';
import healthRouter from './routes/health';

export function createApp(): Application {
  const app: Application = express();

  // Basic middleware
  app.use(express.json());

  // Mount routes
  app.use('/api/v1/health', healthRouter);

  // Unknown route handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: {
        code: 'NOT_FOUND',
        message: 'Route not found',
      },
    });
  });

  // Global error handler
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Unhandled application error:', err.message);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
      },
    });
  });

  return app;
}
