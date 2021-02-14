const common = require('./components/common');
const logger = require('./components/logger');
const rabbitmq = require('./components/rabbitmq');
const twitter = require('./components/twitter');

module.exports = {
  ...common, ...logger, ...rabbitmq, ...twitter,
};
