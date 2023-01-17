const mysql = require("mysql2");
const config = require("../config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db.database,config.db.user,config.db.password,{
    dialect: "mysql",
    host: config.db.host,
    logging: false

});

async function connect(){
    try {
        await sequelize.authenticate();
        console.log("mysql connection")
    } catch (error) {
        console.log("connection failed")
    }
}

connect();

module.exports = sequelize;