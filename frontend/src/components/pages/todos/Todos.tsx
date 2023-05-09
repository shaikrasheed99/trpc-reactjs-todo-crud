import classes from './todos.module.css';
import Todo from '../todo/Todo';
import EmptyTodos from '../emptyTodos/EmptyTodos';
import { ITodo } from '../types';
import { trpc } from '../../../App';

interface TodosProps {
    todos: ITodo[];
    setTodos: (todos: ITodo[]) => void;
}

const Todos = ({ todos, setTodos }: TodosProps) => {
    const isEmpty = (todos: ITodo[]) => {
        return todos.length === 0;
    };

    const handleDelete = async (id: number) => {
        await trpc.deleteTodo.mutate({ id });

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
