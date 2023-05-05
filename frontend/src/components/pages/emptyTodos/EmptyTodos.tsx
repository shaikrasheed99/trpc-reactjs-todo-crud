import classes from './emptyTodos.module.css';

const EmptyTodos = () => {
    return (
        <div className={classes.emptyTodos}>
            <h1>There are no todos, please add one!!</h1>
        </div>
    );
};

export default EmptyTodos;
