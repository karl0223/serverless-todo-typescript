"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Test Hello from TypeScript!',
            input: event,
        }),
    };
};
exports.handler = handler;
//# sourceMappingURL=test-hello.js.map