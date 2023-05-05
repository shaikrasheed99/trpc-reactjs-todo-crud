import { useState } from 'react';
import classes from './app.module.css';
import Navbar from './components/layouts/navbar/Navbar';
import Todos from './components/pages/todos/Todos';
import { ITodo, Priority } from './components/pages/types';

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
            <Navbar setTodos={setTodos} />
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
