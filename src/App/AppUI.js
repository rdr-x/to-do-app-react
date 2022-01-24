import React from "react";
import { TodoContext } from '../ToDoContext'
import { ToDoCounter } from '../ToDoCounter/index.js';
import { ToDoSearch } from '../ToDoSearch/index.js';
import { ToDoList } from '../ToDoList/index.js';
import { ToDoItem } from '../ToDoItem/index.js';
import { CreateToDoButton } from '../CreateToDoButton/index.js';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm'
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
        } = React.useContext(TodoContext);
    return (
    <React.Fragment>
        <ToDoCounter />
        <ToDoSearch />
        <ToDoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
            
            {searchedTodos.map(todo => (
            <ToDoItem 
            completed={todo.completed}
            key={todo.text} 
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </ToDoList>

        {openModal && (
            <Modal>
                <ToDoForm />
            </Modal>
        )}
        <CreateToDoButton 
            setOpenModal={setOpenModal}
            openModal={openModal}
        />
    </React.Fragment>
    );
}

export { AppUI };