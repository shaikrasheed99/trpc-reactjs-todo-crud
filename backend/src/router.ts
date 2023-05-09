import {
    createTodoController,
    deleteTodoController,
    getTodosController,
    testController,
} from './controllers';
import { createTodoValidationSchema, deleteTodoValidationSchema } from './todo.validations';
import { trpc } from './trpc';

export const trpcRouter = trpc.router({
    createTodo: trpc.procedure.input(createTodoValidationSchema).mutation(async ({ input }) => {
        const response = await createTodoController({ input });

        return response;
    }),

    getTodos: trpc.procedure.query(async () => {
        const todos = await getTodosController();

        return todos;
    }),

    deleteTodo: trpc.procedure.input(deleteTodoValidationSchema).mutation(async ({ input }) => {
        const response = await deleteTodoController({ input });

        return response;
    }),

    test: trpc.procedure.query(() => {
        const data = testController();
        return data;
    }),
});

export type TRPCRouter = typeof trpcRouter;
