export const handler = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from TypeScript!',
            input: event,
        }),
    };
};
