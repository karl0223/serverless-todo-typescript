import { DataTypes } from "sequelize";
import sequelize from "../db/db";
const Todo = sequelize.define("Todo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
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
export default Todo;
