import React from 'react';
import './ToDoList.css'

function ToDoList(props) {
    return (
        <section className='ToDoList-container'>
            <ul className='ToDoList-container-list'>
                {props.children}
            </ul>
        </section>
    )
}

export { ToDoList };
