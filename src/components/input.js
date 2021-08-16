import React, { useState } from 'react'
import './input.css'
import { useDispatch } from 'react-redux'
import { saveTodo, } from '../features/todoSlice'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Input = () => {

    var [input, setInput] = useState('')
    const dispatch=useDispatch()  //Use dispatch for saveTodo reducer from import
    
    const addTodo = () => {
        
        //Getting the item entered with its properties
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now(),
        }))
       // localStorage.setItem('todoList', input, false, Date.now())
       setInput('')
    }



    return (
        <div className="container">
        <TextField  label="Add ToDo" type="text" className="textInput" value={input} onChange={e => setInput(e.target.value)}/>
       {/*  <input type="text" value={input} onChange={e => setInput(e.target.value)} /> */}
        <Button
                variant="contained"
                color="primary"
                className="buttonAdd"
                onClick={addTodo}
                //startIcon={<DeleteIcon />}
                
            >
            <h6> Add </h6>
       </Button> 
        {/* <button className="buttonAdd" onClick={addTodo}> Add! </button> */}
           
        </div>


               
       
      
    )
}


export default Input
