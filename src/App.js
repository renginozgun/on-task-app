import React from 'react';
import Input from './components/input'
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';
import Header from './components/header'



function App() {
  const todoList = useSelector(selectTodoList)
  var checkValue;
  // error const done=useSelector(isChecked)
  const state = { date: new Date() }   
  

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => { setIsEnabled(previousState => !previousState)}


const renderCheckboxes=()=>{
  {return isEnabled ? todoList.map((item) =>

    item.done &&   <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />

  )

     :  todoList.map((item) =>

      <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />

    )}

}
  return ( 

    <div className="App">
      <Header datestring={state.date.toLocaleDateString()} />

      <div className="app_container">
        <div className="app_todoContainer">{ 
          <Switch  onChange={toggleSwitch} value={isEnabled} name="gilad" /> }
          {
            <div className="todo"> 

            {renderCheckboxes()}

            </div>

          }</div>

        <Input />

      </div>

    </div>
  );
}

export default App;
