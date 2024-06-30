import Todo from '../models/todo';
export const createTodo = async (event) => {
    const { title, description } = JSON.parse(event.body || '{}');
    try {
        const todo = await Todo.create({ title, description });
        return {
            statusCode: 201,
            body: JSON.stringify(todo)
        };
    }
    catch {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};
