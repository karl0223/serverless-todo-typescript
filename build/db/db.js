"use strict";
// import { Sequelize } from 'sequelize';
// import * as config from '../config/config.json';
Object.defineProperty(exports, "__esModule", { value: true });
// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize((config as any)[env]);
// // Test the connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection to the database has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// // Synchronize all defined models to the DB
// async function syncModels() {
//   try {
//     await sequelize.sync({ alter: true }); // Use alter: true for development to automatically update schema
//     console.log('All models were synchronized successfully.');
//   } catch (error) {
//     console.error('Unable to synchronize models:', error);
//   }
// }
// testConnection();
// syncModels();
// export default sequelize;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432, // PostgreSQL default port
    dialect: 'postgres', // Specify the dialect of the database
});
sequelize.authenticate()
    .then(async () => {
    console.log('Connection has been established successfully.');
    // Synchronize all models
    await sequelize.sync({ alter: true }); // Use alter: true to update tables to match the models
    console.log('All models were synchronized successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
