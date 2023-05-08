import { useState } from 'react';
import classes from './navbar.module.css';
import AddTodoPopup from '../../pages/addTodoPopup/AddTodoPopup';

const Navbar = () => {
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
                {isPopupOpen && <AddTodoPopup closePopup={togglePopup} />}
            </div>
        </div>
    );
};

export default Navbar;
