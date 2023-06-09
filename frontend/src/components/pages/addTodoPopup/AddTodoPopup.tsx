import { ChangeEvent, FormEvent, useState } from 'react';
import PriorityDropdown from '../priorityDropdown/PriorityDropdown';
import classes from './addTodoPopup.module.css';
import closeIcon from '../../../assets/icons/cross.png';
import { ITodo, Priority } from '../types';
import { trpc } from '../../../App';

interface AddTodoPopupProps {
    closePopup: () => void;
    setTodos: (todos: ITodo[]) => void;
}

const AddTodoPopup = ({ closePopup, setTodos }: AddTodoPopupProps) => {
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority>(Priority.HIGH);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const getPriority = (newPriority: Priority) => {
        setPriority(newPriority);
    };

    const sendTodoToServer = async () => {
        const id = Math.floor(Math.random() * 899999 + 100000);
        const newTodo: ITodo = {
            id,
            description,
            priority,
            isCompleted: false,
        };

        await trpc.createTodo.mutate(newTodo);

        setTodos((previous) => [...previous, newTodo]);
    };

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        sendTodoToServer();
        closePopup();
    };

    return (
        <div className={classes.modal}>
            <div className={classes.overlay} />
            <div className={classes.content}>
                <h3 className={classes.header}>Add New TODO:</h3>
                <div className={classes.close} onClick={() => closePopup()}>
                    <img className={classes.closeIcon} src={closeIcon} alt="close-icon" />
                </div>
                <form onSubmit={handleOnSubmit}>
                    <label className={classes.description}>Add Description</label>
                    <input
                        className={classes.textInput}
                        type="text"
                        name="description"
                        placeholder="description"
                        required
                        value={description}
                        onChange={handleChange}
                    />
                    <div className={classes.priority}>
                        <PriorityDropdown getPriority={getPriority} />
                    </div>
                    <div className={classes.button}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodoPopup;
