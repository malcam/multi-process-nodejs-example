const joi = require('joi');

/*
//  FIXME: Da problemas por el cambio de version de joi
const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    // TODO: Mover a constantes
    .allow('development', 'production', 'test', 'provision', 'api')
    .required(),
}).unknown()
  .required();


const { error, value: envVars } = joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
*/
// NOTE: este es un parche
const envVars = process.env;

const config = {
  env: envVars.NODE_ENV,
};

module.exports = config;
