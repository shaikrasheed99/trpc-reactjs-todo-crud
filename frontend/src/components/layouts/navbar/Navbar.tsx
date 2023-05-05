import { useState } from 'react';
import classes from './navbar.module.css';
import Modal from '../../pages/popUp/Modal';

function Navbar(): JSX.Element {
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
                {isPopupOpen && <Modal closePopup={togglePopup} />}
            </div>
        </div>
    );
}

export default Navbar;
