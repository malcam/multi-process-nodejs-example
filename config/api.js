const common = require('./components/common');
// TODO: actualizar codigo a version nueva de joi
// const logger = require('./components/logger');
const server = require('./components/server');

// module.exports = { ...common, ...logger, ...server };
module.exports = { ...common, ...server };
