import classes from './app.module.css';
import Navbar from './components/layouts/navbar/Navbar';
import Todos from './components/pages/todos/Todos';

const App = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <Todos />
        </div>
    );
};

export default App;
