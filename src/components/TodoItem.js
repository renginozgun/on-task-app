import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import {editTodo, setCheck} from '../features/todoSlice'
import {deleteTodo} from '../features/todoSlice'
import {useState} from 'react';
import Button from '@material-ui/core/Button';
const TodoItem = ({name,done,id}) => {

    
    const[NAME, setName]=useState(name)
    
    var editable=false
    const dispatch=useDispatch()
    const handleCheck=()=>{
        dispatch(setCheck(id))
    }

    const deleteTodos=()=> {  
        dispatch(deleteTodo({id}))
        console.log("burası delete")
    }

    const handleEdit=() => {
       
        if(NAME===""){
            alert("You can not leave input field empty!")

        }
        else{
            dispatch(editTodo({
                NAME:NAME,
                id:id,
            }))
        }
        
    } 
   
    return (
        <div className='todoItem'>
        <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }} />


        {true? <input type="text" value={NAME} onChange={ (e) => setName(e.target.value)}/> :  <p className={done ? 'todoItem--done' : null}  >{NAME}</p> }
      
         
        <Button onClick = {handleEdit} color="secondary" >  <h6> Edit  </h6>  </Button>

            <div className='delete'>         
            <Button
                variant="contained"
                color="secondary"
                className="deleteButton"
                onClick={deleteTodos}
                //startIcon={<DeleteIcon />}               
            >  
            <h6> Delete </h6>
            </Button>
         
            </div>         

        </div>
    )
}

export default TodoItem



 /*    */


/*  <input key= {id} ref={inputRef} disabled={inputRef} defaultValue={name} className={done ? 'todoItem--done' : null}  />  */