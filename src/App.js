import React from 'react';
import Input from './components/input'
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

import Header from './components/header';


function App() {
  const todoList = useSelector(selectTodoList)
 
 // error const done=useSelector(isChecked)
  const state = { date: new Date() }
 
 
  return (

    <div className="App">
     <Header datestring={state.date.toLocaleDateString()}/ >
       
        <div className="app_container">

          <div className="app_todoContainer">
           
              {
               todoList.map((item) => (   
               
               <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />  
                                 
              ))} 
            

          </div>
          <Input />
         
        </div>

    </div>
  );
}

export default App;
