"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const getAllTodos = async (event) => {
    try {
        const todos = await todo_1.default.findAll();
        return {
            statusCode: 201,
            body: JSON.stringify(todos)
        };
    }
    catch {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};
exports.getAllTodos = getAllTodos;
