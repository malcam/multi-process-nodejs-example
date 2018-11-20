const passport = require('koa-passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { BasicStrategy } = require('passport-http');
const { Strategy: BearerStrategy } = require('passport-http-bearer');

const options = {};
const memoryUser = { id: 1 };

passport.serializeUser((user, done) => {
  done(null, memoryUser.id);
});

passport.deserializeUser((id, done) => {
  done(null, memoryUser);
  // repositories.users.byId(id)
  // 	.then(user => done(null, user))
  // 	.catch(err => done(err, null))
});

passport.use('local', new LocalStrategy(options, (username, password, done) => {
  const inMemory = { name: 'admin', pass: '12345' };

  if (inMemory.name === username && inMemory.pass === password) {
    return done(null, memoryUser);// err,user,info
  }
  return done(null, false); // done(err)
}));


/**
 * BasicStrategy & ClientPasswordStrategy
 *
 * These strategies are used to authenticate registered OAuth clients.  They are
 * employed to protect the `token` endpoint, which consumers use to obtain
 * access tokens.  The OAuth 2.0 specification suggests that clients use the
 * HTTP Basic scheme to authenticate.  Use of the client password strategy
 * allows clients to send the same credentials in the request body (as opposed
 * to the `Authorization` header).  While this approach is not recommended by
 * the specification, in practice it is quite common.
 */

//espera form body

passport.use('clientBasic', new BasicStrategy((clientId, clientSecret, done) => {
  // return done(null, false); }
  const client = { id: 999 };
  return done(null, client);
}));

/**
 * This strategy is used to authenticate users based on an access token (aka a
 * bearer token).
 */
passport.use('accessToken', new BearerStrategy((accessToken, done) => {
  // buscar el token
  // comprobar expiracion
// borrar si ha caducado
// eturn done(err)
// return done(null, false) no token found
// done(null, user, { scope: '*' });

  //const accessTokenHash = crypto.createHash('sha1').update(accessToken).digest('hex');
  done(null, {id:'uuid'}, { scope: '*' });
}));
