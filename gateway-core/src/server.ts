import { createApp } from './app';
import { config } from './config';
import http from 'http';

function startServer() {
  console.log(`Starting Nexus Gateway Core...`);
  console.log(`Environment: ${config.environment}`);

  const app = createApp();
  const server = http.createServer(app);

  server.listen(config.port, config.host, () => {
    console.log(`Gateway started successfully on http://${config.host}:${config.port}`);
  });

  // Graceful shutdown mechanism
  const shutdown = (signal: string) => {
    console.log(`\nReceived ${signal}. Initiating graceful shutdown...`);
    server.close(() => {
      console.log('Gateway shutdown complete.');
      process.exit(0);
    });

    // Force shutdown if taking too long
    setTimeout(() => {
      console.error('Forcing shutdown due to timeout.');
      process.exit(1);
    }, 10000).unref();
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

if (require.main === module) {
  startServer();
}
