import React from 'react';
import './ToDoSearch.css'
import { TodoContext } from '../ToDoContext';

function ToDoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return (
            <div>
                <input 
                onChange={onSearchValueChange}
                value={searchValue}
                className='ToDoSearch' 
                placeholder="Search a task... 📝" />
        </div>
    )
}

export { ToDoSearch };