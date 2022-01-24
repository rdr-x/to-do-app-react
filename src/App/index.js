import React from 'react';
// import './App.css';
import { TodoProvider } from '../ToDoContext'
import { AppUI } from './AppUI'
// const defaultTodos = [
//   {
//     text: 'Bañar a los perros',
//     completed: false,
//   },
//   {
//     text: 'Cursos Platzi',
//     completed: false,
//   },
//   {
//     text: 'corregir tesis',
//     completed: false,
//   },
//   {
//     text: 'Ir al mercado',
//     completed: false,
//   },
// ]



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
