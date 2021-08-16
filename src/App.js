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
import Checkbox from '@material-ui/core/Checkbox';

function App() {
  const todoList = useSelector(selectTodoList)
  
  const state = { date: new Date() }   
  
// CHECKBOX --------------------------------------------------------------
const [checkedOne, setChecked] = useState(false);
const [checked2, setChecked2] = useState(false);
const [checked3, setChecked3] = useState(true);
const handleChange = (event) => {
  setChecked(event.target.checked);
  setChecked3(false);
  setChecked2(false);
};
const handleChange2 = (event) => {
  setChecked2(event.target.checked);
  setChecked(false);
  setChecked3(false);
};
const handleChange3 = (event) => {
  setChecked3(event.target.checked);
  setChecked2(false);
  setChecked(false);
};
const renderCheckbox=()=>{
 return <FormGroup row> 
 <FormControlLabel control={<Checkbox checked={checkedOne} onChange={handleChange} /> } label="Finished tasks" /> 
 <FormControlLabel control={<Checkbox checked={checked2} onChange={handleChange2} /> } label="Unfinished tasks" /> 
 <FormControlLabel control={<Checkbox checked={checked3} onChange={handleChange3} /> } label="All tasks" /> 

  </FormGroup>
}

//---------------------------------------------------------------CHECKBOX

//LISTS -----------------------------------------------------------------
const renderLists=()=>{
  
    if(checkedOne===true){return todoList.map((item) => item.done &&  <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />)
    }if(checked2===true){return todoList.map((item) => !item.done &&  <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />)}
    if(checked3===true){ return  todoList.map((item) => <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />) }

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
