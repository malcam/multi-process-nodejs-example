const common = require('./components/common');
const logger = require('./components/logger');
const rabbitmq = require('./components/rabbitmq');
const redis = require('./components/redis');

module.exports = {
  ...common, ...logger, ...rabbitmq, ...redis,
};
