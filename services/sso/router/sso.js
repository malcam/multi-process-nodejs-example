const fs = require('fs');
const Router = require('koa-router');
const koaBody = require('koa-body');
const passport = require('koa-passport');
const oauth2orize = require('../components/oauth2orize');

const router = new Router();

router.post(
    '/token',
    koaBody(),
    passport.authenticate(['clientBasic'], { session: false }),
    oauth2orize.token
);

router.get('/restricted', passport.authenticate('accessToken', { session: false }), function (ctx, next) {
  //‌‌ctx.state esta lo que viene en la respues de done de acces token
  //ctx.body = "Yay, you successfully accessed the restricted resource!";
  ctx.body = ctx.state.user;
  next();
})

router.get('/authorize', koaBody(), oauth2orize.authorization);

router.post('/challenge', koaBody(), ctx => passport.authenticate('local', (err, user, info, status) => {
  if (user) {
    ctx.login(user);
    // ctx.redirect('/auth/status');
    // It is not essential for the flow to redirect here, it would also be possible to call this directly
    const { responseType, clientId, redirectUri } = { responseType: 'code', clientId: '1', redirectUri: 'http://localhost:3001/callback' };
    ctx.redirect(`/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}`);
  } else {
    ctx.status = 400;
    ctx.redirect('/auth/status');
    // ctx.body = { status: 'error' };
  }
})(ctx));

router.get('/login', async (ctx) => {
  if (!ctx.isAuthenticated()) {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./services/sso/views/login.html');
  } else {
    ctx.redirect('/auth/status');
  }
});

router.get('/auth/status', async (ctx) => {
  if (ctx.isAuthenticated()) {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./services/sso/views/status.html');
  } else {
    ctx.redirect('/login');
  }
});

module.exports = router;
