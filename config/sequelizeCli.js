// config/sequelizeCli.js

module.exports = {
    development: {
      dialect: 'postgres',
      host: 'localhost',
      port: '5432',
      database: 'onebitflix_development',
      username: 'onebitflix',
      password: 'onebitflix'
    }
  }
// Normalmente não se usa os logins e senhas assim no codigo. deve-se usar as variaveis de ambiente.