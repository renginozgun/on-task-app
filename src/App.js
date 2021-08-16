import React from 'react';
import Input from './components/input'
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import { useState } from 'react';
import Header from './components/header'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function App() {
  const todoList = useSelector(selectTodoList)
  
  const state = { date: new Date() }   
  
// CHECKBOX --------------------------------------------------------------
const [select, setSelect] = useState('All');

const handleSelect=(event)=>
{
setSelect(event.target.value)
}
const renderCheckbox=()=>{
 return <FormGroup row> 

<InputLabel>Task Type</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleSelect}
        >
          <option aria-label="None" value="" />
          <option value={'Finished'}>Finished</option>
          <option value={'Unfinished'}>Unfinished</option>
          <option value={'All'}>All</option>
        </Select>

  </FormGroup>
}

//---------------------------------------------------------------CHECKBOX

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
           {renderCheckbox()}
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
