import React from 'react';
import './CreateToDoButton.css';

function CreateToDoButton({setOpenModal, openModal}) {
    const onClickButton = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className='add-Container'>
            <button 
            className='CreateToDoButton'
            onClick={onClickButton}
            >➕</button>  
        </div>
        );
}

export { CreateToDoButton };
