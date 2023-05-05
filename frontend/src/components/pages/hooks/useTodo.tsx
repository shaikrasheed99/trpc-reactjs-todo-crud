// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { ITodo, Priority } from '../types';

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

const useTodo = () => {
    const [todos, setTodos] = useState<ITodo[]>(defaultTodos);

    const isEmpty = (todos: ITodo[]) => {
        return todos.length === 0;
    };

    const handleDelete = (id: number) => {
        const filteredTodos = todos.filter((todo) => todo.id != id);
        setTodos(filteredTodos);
    };

    const addTodo = (description: string, priority: Priority) => {
        description = description.trim();
        const newTodo: ITodo = {
            id: 10,
            description,
            priority,
            isCompleted: false,
        };

        console.log('[NewTodo]', newTodo);

        // setTodos([
        //     {
        //         id: 10,
        //         description: 'abc',
        //         priority: Priority.HIGH,
        //         isCompleted: false,
        //     },
        // ]);

        setTodos((previous) => [...previous, newTodo]);

        console.log('[Todos]', todos);
    };

    return { todos, isEmpty, handleDelete, addTodo };
};

export default useTodo;
