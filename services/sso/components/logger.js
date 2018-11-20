const base = '../../..';

const winston = require('winston')
const config = require(`${base}/config`);

const logger = winston.createLogger({
    level: config.logger.level,
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File(config.logger.file),
    //   new winston.transports.File({ filename: 'combined.log' })
    ]
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console(config.logger.console));
  }

  module.exports = logger;