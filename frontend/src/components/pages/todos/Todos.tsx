import classes from './todos.module.css';
import Todo from '../todo/Todo';
import EmptyTodos from '../emptyTodos/EmptyTodos';
import { ITodo } from '../types';
import { useState, useEffect } from 'react';
import { trpc } from '../../../App';

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const todosFromServer = async () => {
            const todos = await trpc.getTodos.query();

            setTodos(todos as ITodo[]);
        };

        todosFromServer();
    });

    const isEmpty = (todos: ITodo[]) => {
        return todos.length === 0;
    };

    const handleDelete = (id: number) => {
        const filteredTodos = todos.filter((todo: ITodo) => todo.id != id);
        setTodos(filteredTodos);
    };

    return (
        <div className={classes.todoList}>
            {isEmpty(todos) ? (
                <EmptyTodos />
            ) : (
                todos.map((todo) => <Todo todo={todo} handleDelete={handleDelete} key={todo.id} />)
            )}
        </div>
    );
};

export default Todos;
