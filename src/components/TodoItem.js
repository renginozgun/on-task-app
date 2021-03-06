import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import {editTodo, setCheck} from '../features/todoSlice'
import {deleteTodo} from '../features/todoSlice'
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
const TodoItem = ({name,done,id}) => {

    
    const[NAME, setName]=useState(name)
    const [editMode, setEditMode]=useState(false)
    const [isEmpty, raiseError]=useState(false)
    const [prevName, setprevName]=useState()
  
    const dispatch=useDispatch()
    const handleCheck=()=>{
        dispatch(setCheck({id}))      
    }

    const deleteTodos=()=> {  
        dispatch(deleteTodo({id}))       
    }
    const handleEdit=() => {
        setprevName(NAME)
        setEditMode(true)
    } 
    const handleCancel=()=>{
        setName(prevName)
        setEditMode(false)       
    }
    const handleSave=()=>{
        setprevName(NAME)
        if(NAME===""){
            raiseError(true)
        }
        else{
            raiseError(false)
            setEditMode(false)
            dispatch(editTodo({
                item:NAME,
                id:id,
                done:done,
            }))

       /*      editTodo({
                item:NAME,
                id:id,
                done:done,
            }) */

        }
    }
   const renderButtons=()=>{
                                          
    if(editMode===false)
    {
        return (
            <div className="buttonContainer">
                <Button variant="contained" className="styleButton" onClick = {handleEdit} color="secondary"> <h6>Edit </h6></Button> 
                <Button variant="contained" color="primary" className="styleButton"  onClick={deleteTodos}> <h6> Delete</h6></Button> 
            </div> )  
        }
                                  
    else{ 

        return (
            <div className="buttonContainer">
                <Button variant="contained" className="styleButton" onClick = {handleSave}> <h6> Save</h6></Button> 
                <Button variant="contained" color="primary" className="styleButton"  onClick={handleCancel}> <h6>Cancel </h6></Button> 
            </div> )
 
    }   
}

    return (
        <div>
            <div className='todoItem'>
                <Checkbox checked={done} color="primary" onChange={handleCheck} inputProps={{ 'aria-label': 'primary checkbox' }} />
                {editMode ? <input type="text" className="inputArea" value={NAME} onChange={(e) => setName(e.target.value)} /> : <p className={done ? 'todoItem--done' : null}  >{NAME}</p>}
                {renderButtons()}

            </div>
            {isEmpty && <Alert className="alert" severity="error" size="small">You can not leave the space empty!</Alert>}
        </div>

    )
}

export default TodoItem

