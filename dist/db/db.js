"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
});
sequelize.authenticate()
    .then(async () => {
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map