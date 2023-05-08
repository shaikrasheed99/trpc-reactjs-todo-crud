import { createTodoController, testController } from './controllers';
import { createTodoValidationSchema } from './todo.validations';
import { trpc } from './trpc';

export const trpcRouter = trpc.router({
    createTodo: trpc.procedure.input(createTodoValidationSchema).mutation(async ({ input }) => {
        const response = await createTodoController({ input });

        return response;
    }),

    test: trpc.procedure.query(() => {
        const data = testController();
        return data;
    }),
});

export type TRPCRouter = typeof trpcRouter;
