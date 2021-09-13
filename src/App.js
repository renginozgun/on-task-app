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
import { useSpring, animated } from '@react-spring/web'
import './styles.css'
import { useDispatch } from 'react-redux'
import Ztext from 'react-ztext'
import { setTodo } from './features/todoSlice'

function App() {


//ANIMATIONS START
  const styles = useSpring({
    loop: true,

    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })
  // ANIMATIONS FINISH



  const dispatch = useDispatch()  //Use dispatch for saveTodo reducer from import
  const todoList = useSelector(selectTodoList);

  useEffect(() => {
    let todoList = JSON.parse(localStorage.getItem("toDoList"));
    todoList = todoList ? todoList : [];
    dispatch(setTodo(todoList));
  }, []);



  const state = { date: new Date() }

  // SELECT --------------------------------------------------------------
  const [select, setSelect] = useState('All');

  const handleSelect = (event) => {
    setSelect(event.target.value)
  }
  const renderSelect = () => {
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
  const renderLists = () => {

    let returnList = null;

    if (select === 'Finished') { returnList = todoList.map((item) => item.done && <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />) }
    else if (select === 'Unfinished') { returnList = todoList.map((item) => !item.done && <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />) }
    else if (select === 'All') { returnList = todoList.map((item) => <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />) }

    return returnList;
  }
  //----------------------------------------------------------------LISTS


  const wrapperStyle = {
  
    textAlign: "left",
    fontSize: "3rem"
  };

  const renderAnimations=()=>{
   return <div className="animation">
    <div className="leftbox">

      <animated.svg style={{ transformOrigin: "center", ...styles }}>
        <svg viewBox="0 0 24 24">
          <animated.path d="M3 10.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />{" "}
        </svg>
      </animated.svg>{" "}
    </div>
    <div className="rightbox" style={wrapperStyle}>
      <Ztext
        depth="10px"
        direction="both"
        event="pointer"
        eventRotation="30deg"
        eventDirection="default"
        height="30"
        width="30"
        fade={true}
        layers={70}
        perspective="500px"
        fontSize="4rem"
      >
        <span
          data-z
          data-z-layers="3"
          data-z-depth="0.5em"
          aria-label="emoji"
        >
          onTask App
        </span>
      </Ztext>
    </div>
  </div>

  }
  return (
    <div className="App">
     {renderAnimations()}
      <div className="app_container">
        <div className="app_todoContainer">
          {renderSelect()}
          <hr></hr>
          <div className="todo">{renderLists()}</div>
        </div>

        <Input />
      </div>
    </div>
  );


}

export default App
