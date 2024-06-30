"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const createTodo = async (event) => {
    const { title, description } = JSON.parse(event.body || '{}');
    console.log('title:', title);
    console.log('description:', description);
    try {
        const todo = await todo_1.default.create({ title, description });
        return {
            statusCode: 201,
            body: JSON.stringify(todo)
        };
    }
    catch (error) {
        console.error('Error creating todo:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};
exports.createTodo = createTodo;
//# sourceMappingURL=create-todo.js.map