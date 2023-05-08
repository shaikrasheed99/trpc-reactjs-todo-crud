import classes from './app.module.css';
import Navbar from './components/layouts/navbar/Navbar';
import Todos from './components/pages/todos/Todos';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { TRPCRouter } from '../../backend/src/router';

const TRPC_ENDPOINT = 'http://localhost:3000/trpc/';

export const trpc = createTRPCProxyClient<TRPCRouter>({
    links: [
        httpBatchLink({
            url: TRPC_ENDPOINT,
        }),
    ],
});

const App = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <Todos />
        </div>
    );
};

export default App;
