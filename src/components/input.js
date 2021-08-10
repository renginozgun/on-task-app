import React, { useState } from 'react'
import './input.css'
import { useDispatch } from 'react-redux'
import { saveTodo, } from '../features/todoSlice'

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
        setInput('')
    }



    return (
        <div className="container">
            
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
         
         <button className="buttonAdd" onClick={addTodo}> Add! </button>
           
        </div>


               
       
      
    )
}


export default Input
