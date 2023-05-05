import { ChangeEvent, FormEvent, useState } from 'react';
import PriorityDropdown from '../priorityDropdown/PriorityDropdown';
import classes from './addTodoPopup.module.css';
import closeIcon from '../../../asserts/icons/cross.png';
import { Priority } from '../types';
import useTodo from '../hooks/useTodo';

interface AddTodoPopupProps {
    closePopup: () => void;
}

const AddTodoPopup = ({ closePopup }: AddTodoPopupProps) => {
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority>(Priority.HIGH);
    const { addTodo } = useTodo();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const getPriority = (newPriority: Priority) => {
        setPriority(newPriority);
    };

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(description);
        // console.log(priority);
        closePopup();
        addTodo(description, priority);
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
