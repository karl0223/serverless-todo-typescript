"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db/db"));
const Todo = db_1.default.define("Todo", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    // Use Sequelize's built-in timestamps
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    // Ensure the timestamps are in the correct format
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
    scopes: {
        withTimestamps: {
            attributes: { include: ['created_at', 'updated_at'] },
        },
    },
});
exports.default = Todo;
