import classes from './loader.module.css';

const Loader = () => {
    return (
        <div className={classes.container}>
            <div className={classes.spinner} />
        </div>
    );
};

export default Loader;
