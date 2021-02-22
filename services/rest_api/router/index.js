const Router = require('koa-router');
const userRoutes = require('./login/login');

const router = new Router();

router.use(userRoutes.routes());

// default
router.all('/', (ctx, next) => {
  ctx.body = {
    error: 0,
    flash: 'welcome to rest api challenge...',
    data: null,
  };
  next();
});

module.exports = router;
