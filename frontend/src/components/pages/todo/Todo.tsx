import classes from './todo.module.css';
import highPriorityIcon from '../../../asserts/icons/high.png';
import mediumPriorityIcon from '../../../asserts/icons/medium.png';
import lowPriorityIcon from '../../../asserts/icons/low.png';
import deleteIcon from '../../../asserts/icons/delete.png';
import { ITodo, Priority } from '../types';

interface TodoProps {
    todo: ITodo;
    handleDelete: (id: number) => void;
}

const Todo = ({ todo, handleDelete }: TodoProps) => {
    const getPriorityIcon = (priority: Priority) => {
        if (priority === Priority.HIGH) {
            return highPriorityIcon;
        } else if (priority === Priority.MEDIUM) {
            return mediumPriorityIcon;
        } else {
            return lowPriorityIcon;
        }
    };

    return (
        <div className={classes.todo}>
            <div className={classes.description}>{todo.description}</div>
            <div className={classes.icons}>
                <img
                    className={classes.icon}
                    src={getPriorityIcon(todo.priority)}
                    alt="priority-icon"
                />
                <img
                    className={classes.deleteIcon}
                    src={deleteIcon}
                    alt="deleteIcon"
                    onClick={() => handleDelete(todo.id)}
                />
            </div>
        </div>
    );
};

export default Todo;
