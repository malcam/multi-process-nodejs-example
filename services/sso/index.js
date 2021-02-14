const http = require('http');
const logger = require('winston');

const config = require('../../config/index');
const app = require('./server');

const server = http.createServer(app.callback());

server.on('listening', () => {
  logger.info(`App is listening on port ${config.server.port}`);
});

server.on('error', (err) => {
  logger.error('Error happened during server start', err);
  process.exit(1);
});

server.listen(config.server.port);
