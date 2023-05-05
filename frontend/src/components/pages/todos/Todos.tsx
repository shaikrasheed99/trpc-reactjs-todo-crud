import classes from './todos.module.css';
import Todo from '../todo/Todo';
import EmptyTodos from '../emptyTodos/EmptyTodos';
import { ITodo } from '../types';

interface TodosProp {
    todos: ITodo[];
    setTodos: (todos: ITodo[]) => void;
}

const Todos = ({ todos, setTodos }: TodosProp) => {
    const isEmpty = (todos: ITodo[]) => {
        return todos.length === 0;
    };

    const handleDelete = (id: number) => {
        const filteredTodos = todos.filter((todo) => todo.id != id);
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
