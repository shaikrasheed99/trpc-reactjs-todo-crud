import classes from './todos.module.css';
import Todo from '../todo/Todo';
import EmptyTodos from '../emptyTodos/EmptyTodos';
import useTodo from '../hooks/useTodo';

const Todos = () => {
    const { todos, isEmpty, handleDelete } = useTodo();

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
