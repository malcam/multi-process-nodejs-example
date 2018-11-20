const Koa = require('koa');
const passport = require('koa-passport');
const session = require('koa-session');

require('./components/passport');
const routes = require('./router/index');

const app = new Koa();

// sessions
app.keys = ['super-secret-key'];
app.use(session(app));

app.use(passport.initialize());

app.use(passport.session());

app.use(routes.routes());

module.exports = app;
