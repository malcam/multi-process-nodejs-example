const Router = require('koa-router');
const joi = require('joi');
const authService = require('./../../services/auth')(); 
const validate = require('../../utils/validate');
const router = new Router({
  prefix: '/login',
});

console.log(validate)

router.post('/validate-email',
  validate( 
    joi.object({
      email: joi.string().email().required(),
    })
  ), authService.validEmail);

router.post('/', () => {

});


router.post('/recovery-password', () => {

});

module.exports = router;
