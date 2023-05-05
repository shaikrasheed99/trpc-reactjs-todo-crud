import highPriorityIcon from '../../../asserts/icons/high.png';
import mediumPriorityIcon from '../../../asserts/icons/medium.png';
import lowPriorityIcon from '../../../asserts/icons/low.png';
import classes from './priorityDropdown.module.css';
import { useState } from 'react';
import { Priority } from '../types';

interface IPriority {
    text: Priority;
    icon: string;
}

interface PriorityDropdownProps {
    getPriority: (priority: Priority) => void;
}

const PriorityDropdown = ({ getPriority }: PriorityDropdownProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [priority, setPriority] = useState<IPriority | null>();

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const handleSelect = (text: Priority, icon: string) => {
        setIsSelected(true);
        setPriority({
            text,
            icon,
        });
        setIsActive(false);
        getPriority(text);
    };

    return (
        <div className={classes.dropdown}>
            <div
                className={[classes.header, isActive && classes.active].join(' ')}
                onClick={handleClick}
            >
                {isSelected ? (
                    <div className={classes.item}>
                        <p className={classes.text}>{priority?.text}</p>
                        <img className={classes.icon} src={priority?.icon} />
                    </div>
                ) : (
                    'Add Priority'
                )}
            </div>
            <div className={[classes.body, isActive && classes.active].join(' ')}>
                <div
                    className={classes.item}
                    onClick={() => handleSelect(Priority.HIGH, highPriorityIcon)}
                >
                    <p className={classes.text}>{Priority.HIGH}</p>
                    <img className={classes.icon} src={highPriorityIcon} />
                </div>
                <div
                    className={classes.item}
                    onClick={() => handleSelect(Priority.MEDIUM, mediumPriorityIcon)}
                >
                    <p className={classes.text}>{Priority.MEDIUM}</p>
                    <img className={classes.icon} src={mediumPriorityIcon} />
                </div>
                <div
                    className={classes.item}
                    onClick={() => handleSelect(Priority.LOW, lowPriorityIcon)}
                >
                    <p className={classes.text}>{Priority.LOW}</p>
                    <img className={classes.icon} src={lowPriorityIcon} />
                </div>
            </div>
        </div>
    );
};

export default PriorityDropdown;
