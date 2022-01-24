import React from 'react';
import { TodoContext } from '../ToDoContext';
import './TodoForm.css';

function ToDoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add a new To Do </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Lavarme las manos"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                    onClick={onSubmit}
                >
                    Add
                </button>
                <button 
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export { ToDoForm };