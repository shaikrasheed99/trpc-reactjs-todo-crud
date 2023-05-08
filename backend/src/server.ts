import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './router';

const app = express();
app.use(cors());
dotenv.config();

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: trpcRouter,
    }),
);

app.get('/test', (req, res) => {
    res.send('This is test api!!');
});

const port = process.env.PORT || 3000;

const databaseUrl = process.env.DATABASE_URL || '';

mongoose
    .connect(databaseUrl)
    .then(() => {
        console.log('[Database]: database is connected!!');
        app.listen(port, () => {
            console.log(`[Server]: server is listening to ${port}`);
        });
    })
    .catch((error) => console.log('[Error]: database connection error'));
