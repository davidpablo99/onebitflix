// config/sequelizeCli.js
import { sequelize } from '../database'
import { adminJsResources } from './resources'

module.exports = {
    development: {
      dialect: 'postgres',
      host: 'localhost',
      port: '5432',
      resources: adminJsResources,
      rootPath: '/admin',
      databases: [sequelize],
      username: 'onebitflix',
      password: 'onebitflix'
    }
  }