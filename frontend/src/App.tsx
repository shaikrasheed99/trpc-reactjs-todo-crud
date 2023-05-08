import classes from './app.module.css';
import Navbar from './components/layouts/navbar/Navbar';
import Todos from './components/pages/todos/Todos';
import { ITodo, Priority } from './components/pages/types';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { TRPCRouter } from '../../backend/src/router';
import { useState } from 'react';

const TRPC_ENDPOINT = 'http://localhost:3000/trpc/';

export const trpc = createTRPCProxyClient<TRPCRouter>({
    links: [
        httpBatchLink({
            url: TRPC_ENDPOINT,
        }),
    ],
});

const defaultTodos: ITodo[] = [
    {
        id: 1,
        description: 'build todo trpc application',
        priority: Priority.HIGH,
        isCompleted: false,
    },
    {
        id: 2,
        description: 'build todo trpc frontend application',
        priority: Priority.MEDIUM,
        isCompleted: false,
    },
    {
        id: 3,
        description: 'build todo trpc frontend application in typescript',
        priority: Priority.LOW,
        isCompleted: false,
    },
    {
        id: 4,
        description: 'build todo trpc application',
        priority: Priority.HIGH,
        isCompleted: false,
    },
    {
        id: 5,
        description: 'build todo trpc frontend application',
        priority: Priority.MEDIUM,
        isCompleted: false,
    },
    {
        id: 6,
        description: 'build todo trpc frontend application in typescript',
        priority: Priority.LOW,
        isCompleted: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>(defaultTodos);

    return (
        <div className={classes.container}>
            <Navbar />
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
