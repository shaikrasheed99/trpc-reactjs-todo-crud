import classes from './app.module.css';
import Navbar from './components/layouts/navbar/Navbar';
import Todos from './components/pages/todos/Todos';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { TRPCRouter } from '../../backend/src/router';
import { useEffect, useState } from 'react';
import { ITodo } from './components/pages/types';
import Loader from './components/layouts/loader/Loader';

const TRPC_ENDPOINT = 'http://localhost:3000/trpc/';

export const trpc = createTRPCProxyClient<TRPCRouter>({
    links: [
        httpBatchLink({
            url: TRPC_ENDPOINT,
        }),
    ],
});

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const todosFromServer = async () => {
            setIsLoading(true);
            const todos = await trpc.getTodos.query();

            setTodos(todos as ITodo[]);
            setIsLoading(false);
        };

        todosFromServer();
    }, []);

    return (
        <div className={classes.container}>
            <Navbar setTodos={setTodos} />
            {isLoading ? <Loader /> : <Todos todos={todos} setTodos={setTodos} />}
        </div>
    );
};

export default App;
