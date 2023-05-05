import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './router';

const app = express();

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: trpcRouter,
    }),
);

app.get('/test', (req, res) => {
    res.send('This is test api!!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`[Server]: server is listening to ${port}`);
});
