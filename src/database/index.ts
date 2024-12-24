import {Sequelize} from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port : 5432,
    database : 'onebitflix_development',
    password : 'onebitflix',
    define : {
        underscored : true //aqui ele vai converter sempre de snack_case para camelCase
    }
})