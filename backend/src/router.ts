import { testController } from './controllers';
import { trpc } from './trpc';

export const trpcRouter = trpc.router({
    test: trpc.procedure.query(() => {
        const data = testController();
        return data;
    }),
});

export type TRPCRouter = typeof trpcRouter;
