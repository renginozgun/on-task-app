import React from 'react';
import Input from './components/input'
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import Switch from '@material-ui/core/Switch';
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
const handleChange = (event) => {
  setChecked(event.target.checked);
};
const renderCheckbox=()=>{
 return <FormGroup>  <Checkbox checked={checkedOne} onChange={handleChange} > </Checkbox>  
 <Checkbox checked={checkedOne} onChange={handleChange} />
 <Checkbox checked={checkedOne} onChange={handleChange} />
  
  </FormGroup>
}

//---------------------------------------------------------------CHECKBOX

//LISTS -----------------------------------------------------------------
const renderLists=()=>{
  
    if(checkedOne===true){
      return todoList.map((item) => item.done &&  <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />)
    }else{ return  todoList.map((item) => <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />) } 
}
//----------------------------------------------------------------LISTS

  return ( 

    <div className="App">
      <Header datestring={state.date.toLocaleDateString()} />

      <div className="app_container">
        <div className="app_todoContainer">
           {renderCheckbox()}
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
