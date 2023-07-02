const { Sequelize } = require('sequelize');
import db from "../models/index"
require('dotenv').config();

const sequelize = new Sequelize(process.env.database, 'root', null, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.PORT_DB || 3307,
    logging: false,
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;