import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import {setCheck} from '../features/todoSlice'
import {deleteTodo} from '../features/todoSlice'

const TodoItem = ({name,done,id}) => {

    const dispatch=useDispatch()

    const handleCheck=()=>{
        dispatch(setCheck(id))
    }

    const deleteTodos=()=> {
        dispatch(deleteTodo(id))
    }

    return (
        <div className='todoItem'>
        <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }} />
            <p className={done && 'todoItem--done'}>{name}</p>
            <button onChange={deleteTodos}> delete </button>
        </div>
    )
}

export default TodoItem
