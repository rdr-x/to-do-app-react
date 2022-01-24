import React from "react";
import './ToDoCounter.css';
import { TodoContext } from '../ToDoContext';

// const style = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

function ToDoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="ToDoCounter">
            📌 You completed {completedTodos} of {totalTodos} tasks 📌
        </h2>
    )
}

export { ToDoCounter };