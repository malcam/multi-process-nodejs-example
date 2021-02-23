const Router = require('koa-router');

const router = new Router({
  prefix: '/login',
});

router.get('/', (ctx, next) => {
	ctx.body = {
		error: 0,
	    flash: 'welcome to login, please set email and password...',
	    data: null,
	};
	next();
});

router.post('/challenge', (ctx, next) => {
	ctx.body = {
		error: 0,
	    flash: 'welcome to challenge...',
	    data: null,
	};
	next();
});

module.exports = router;
