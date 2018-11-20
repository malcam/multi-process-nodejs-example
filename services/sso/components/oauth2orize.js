const compose = require('koa-compose');
const oauth2orize = require('oauth2orize-koa');
const moment = require('moment');

// const crypto = require('crypto');

// create OAuth 2.0 server
const server = oauth2orize.createServer();

server.serializeClient(function(client) {
  //return done(null, client.id);
  return new Promise((resolve, reject) => {
    resolve([null, client.id]);
  });
});

server.deserializeClient(function(id, done, other) {
  const client = {id:100};
  //return done(null, client);
  return new Promise((resolve, reject) => {
    resolve([null, client]);
  });
});

server.grant(oauth2orize.grant.code((client, redirectURI, user, ares, done) => {
  // TODO: crear y guardar code
  const code = 'casdasdadasds';//crypto.randomBytes(64).toString('hex');
  // if (err) {
  //     return done(err);
  // }

  //return done(null, code);
  return new Promise((resolve, reject) => {
    resolve(code);
  });
}));

server.exchange(oauth2orize.exchange.code((client, code, redirectURI, done) => {
  const token = 'abscd';// crypto.randomBytes(64).toString('hex');
  return new Promise((resolve, reject) => {
    resolve(token);
  });

  //return done(null, token);
  // TODO: Buscar el cliente por el code, crear token y guardar
  // AuthorizationCode.findOne(code, function(err, code) {
  //   if (err) { return done(err); }
  //   if (client.id !== code.clientId) { return done(null, false); }
  //   if (redirectURI !== code.redirectUri) { return done(null, false); }

  //   var token = utils.uid(256);
  //   var at = new AccessToken(token, code.userId, code.clientId, code.scope);
  //   at.save(function(err) {
  //     if (err) { return done(err); }
  //     return done(null, token);
  //   });
  // });
}));

//done = response_type
const authorizeFn = server.authorize((clientID, redirectURI, scope, done) => {
  // buscar el cliente por su clientId
  // validar cliente y redirct uri
  // en caso de fallo error
  const client = { id: 1 };

  //return done(null, client, redirectURI);

  return new Promise((resolve, reject) => {

    resolve([client, redirectURI]);
  });
});

// buscar el cliente en db con req.query.client_id
// si no es confiable mostrar dialogo de desicion //res.render('dialog', { transactionID: req.oauth2.transactionID, user: req.user, client: req.oauth2.client });
// si es confiable tomar la desicion automaticamente
const decisionFn = server.decision({ loadTransaction: false }, (ctx) => {
  //done(null, { allow: true });
  return new Promise((resolve, reject) => {
    resolve([null, { allow: true }]);
  });
});

// login.ensureLoggedIn(),
exports.authorization = compose([
  authorizeFn,
  decisionFn,
]);

// Middlewares to export
module.exports.token = compose([
  server.token(),
  server.errorHandler(),
]);
