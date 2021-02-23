const dotenv = require('dotenv').config();
const logger = require('winston');

const type = process.env.PROCESS_TYPE;

logger.info(`Starting '${type}' process`, { pid: process.pid });

if (type === 'sso') {
  require('./services/sso');
} else if (type === 'api') {
  require('./services/rest_api');
} else if (type === 'twitter-stream-worker') {
  require('./services/twitter-stream');
} else if (type === 'social-preprocessor-worker') {
  require('./services/social-preprocessor');
} else {
  throw new Error(`
    ${type} is an unsupported process type. 
    Use one of: 'web', 'twitter-stream-worker', 'social-preprocessor-worker'!
  `);
}
