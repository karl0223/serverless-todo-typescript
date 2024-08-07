import { APIGatewayProxyHandler } from 'aws-lambda';
import Todo from '../models/todo';

export const createTodo: APIGatewayProxyHandler = async(event) => {
    const { title, description } = JSON.parse(event.body || '{}')

    console.log('title:', title)
    console.log('description:', description)

    try {
        const todo = await Todo.create({ title, description })
        return {
            statusCode: 201,
            body: JSON.stringify(todo)
        }
    } catch(error) {
        console.error('Error creating todo:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        }
    }
}
