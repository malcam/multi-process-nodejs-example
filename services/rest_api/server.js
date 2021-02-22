const Koa = require('koa');
// const middleware = require('./middleware/index');
const routes = require('./router/index');

const app = new Koa();

// app.use(middleware.parseQuery({ allowDots: true }));
app.use(routes.routes());

module.exports = app;
