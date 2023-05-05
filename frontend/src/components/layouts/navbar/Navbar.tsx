import { useState } from 'react';
import classes from './navbar.module.css';
import AddTodoPopup from '../../pages/addTodoPopup/AddTodoPopup';
import { ITodo } from '../../pages/types';

interface NavbarProps {
    setTodos: (todos: ITodo[]) => void;
}

const Navbar = ({ setTodos }: NavbarProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={classes.navbar}>
            <h1 className={classes.hero}>The TODO List</h1>
            <div className={classes.list}>
                <div className={classes.addTodo} onClick={togglePopup}>
                    Add TODO
                </div>
                {isPopupOpen && <AddTodoPopup closePopup={togglePopup} setTodos={setTodos} />}
            </div>
        </div>
    );
};

export default Navbar;
