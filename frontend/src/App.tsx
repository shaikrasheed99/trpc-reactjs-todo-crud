import classes from './app.module.css';
import Navbar from './components/layouts/navbar/Navbar';
import Todos from './components/pages/todos/Todos';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { TRPCRouter } from '../../backend/src/router';
import { useEffect, useState } from 'react';
import { ITodo } from './components/pages/types';

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

    useEffect(() => {
        const todosFromServer = async () => {
            const todos = await trpc.getTodos.query();

            setTodos(todos as ITodo[]);
        };

        todosFromServer();
    }, []);

    return (
        <div className={classes.container}>
            <Navbar setTodos={setTodos} />
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
