import { Sequelize } from 'sequelize';
import * as config from '../config/config.json';
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
// Test the connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
// Synchronize all defined models to the DB
async function syncModels() {
    try {
        await sequelize.sync({ alter: true }); // Use alter: true for development to automatically update schema
        console.log('All models were synchronized successfully.');
    }
    catch (error) {
        console.error('Unable to synchronize models:', error);
    }
}
testConnection();
syncModels();
export default sequelize;
