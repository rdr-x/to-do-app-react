import React from 'react';
import './ToDoItem.css'

function ToDoItem(props) {
    
    return (
        <li className='ToDoItem-container'>
            <span className={`✅ ${props.completed && '✅-completed'}`}
            onClick={props.onComplete}
            >✅</span>
            <p className={`ToDoItem-container-text ${props.completed && 'ToDoItem-container-text-completed'}`}>{props.text}</p>
            <span className={`❌ ${props.completed && '❌-completed'}`}
            onClick={props.onDelete}>❌</span>
        </li>
    );
}

export { ToDoItem };
