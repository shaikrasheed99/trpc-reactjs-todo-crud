import { createTodoController, getTodosController, testController } from './controllers';
import { createTodoValidationSchema } from './todo.validations';
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

    test: trpc.procedure.query(() => {
        const data = testController();
        return data;
    }),
});

export type TRPCRouter = typeof trpcRouter;
