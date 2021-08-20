import React, { useState, useEffect } from 'react';
import Input from './components/input'
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import Header from './components/header'
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { useDispatch } from 'react-redux'

import { setTodo } from './features/todoSlice'

function App() {
  const dispatch=useDispatch()  //Use dispatch for saveTodo reducer from import
  const todoList = useSelector(selectTodoList);

  useEffect (() => {
    let todoList = JSON.parse(localStorage.getItem("toDoList"));
    todoList = todoList ? todoList : [];
    dispatch(setTodo(todoList));
  }, []);

  
  
  const state = { date: new Date() }   
  
// SELECT --------------------------------------------------------------
const [select, setSelect] = useState('All');

const handleSelect=(event)=>
{
setSelect(event.target.value)
}
const renderSelect=()=>{
 return <FormGroup row> 

<InputLabel className="inputLabel">Task Type</InputLabel>
        <Select
          native
          value={select}
          onChange={handleSelect}
        >
          <option value={'Finished'}>Finished</option>
          <option value={'Unfinished'}>Unfinished</option>
          <option value={'All'}>All</option>
        </Select>

  </FormGroup>
}

//---------------------------------------------------------------SELECT

//LISTS -----------------------------------------------------------------
const renderLists=()=>{

  let returnList = null;
  
    if(select==='Finished'){returnList = todoList.map((item) => item.done &&  <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />)}
    else if(select==='Unfinished'){returnList = todoList.map((item) => !item.done &&  <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />)}
    else if(select==='All'){returnList =  todoList.map((item) => <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />) }

    return returnList;
}
//----------------------------------------------------------------LISTS

  return ( 

    <div className="App">
      <h2> Today is</h2>
      <Header datestring={state.date.toLocaleDateString()} />
      <h2> Todo List</h2>
      <div className="app_container">
        <div className="app_todoContainer">
           {renderSelect()}
           <hr></hr>
            <div className="todo"> 
            {renderLists()}
            </div>
          </div>

        <Input />

      </div>

    </div>
  );
}

export default App
