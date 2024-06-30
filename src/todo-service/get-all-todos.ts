import { APIGatewayProxyHandler } from 'aws-lambda';
import Todo from '../models/todo';

export const getAllTodos: APIGatewayProxyHandler = async(event) => {
    try {
        const todos = await Todo.findAll()
        return {
            statusCode: 201,
            body: JSON.stringify(todos)
        }
    } catch {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        }
    }
}