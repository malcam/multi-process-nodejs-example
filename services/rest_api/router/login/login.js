const Router = require('koa-router');
const joi = require('joi');
const authService = require('./../../services/auth')(); 
const validate = require('../../utils/validate');
const router = new Router({
  prefix: '/login',
});

router.post('/validate-email',
  validate( 
    joi.object({
      email: joi.string().email().required(),
    })
  ), authService.validateEmail
  );

router.post('/', () => {

});


router.post('/recovery-password', () => {

});

module.exports = router;
