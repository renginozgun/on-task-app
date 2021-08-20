import { createSlice } from '@reduxjs/toolkit'

import { setToLocalStorage } from '../framework/commonMethods';

const initialState = {
  todoList:[],

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state,action)=>{
            state.todoList.push(action.payload);
            let list = state.todoList.map((item) => { return {item: item.item, done: item.done, id: item.id} })
            setToLocalStorage("toDoList", JSON.stringify(list));
            //localStorage.setItem(action.payload.id, JSON.stringify(action.payload))     
        },

        setTodo: (state, action) => {
            state.todoList = action.payload;
        },

       deleteTodo: (state,action) => {
           state.todoList = state.todoList.filter((item) => action.payload.id !== item.id)
           let list = state.todoList.map((item) => { return {item: item.item, done: item.done, id: item.id} })
           setToLocalStorage("toDoList", JSON.stringify(list));
           
       },   
       
        editTodo: (state, action) => {
            console.log(action.payload);
            console.log(action.payload.item);
           
   
         /*    state.todoList = state.todoList.filter((item) => action.payload.id !== item.id)
            state.todoList.push(action.payload); */
            //eslint-disable-next-line
           state.todoList.map(item => {
                if (action.payload.id === item.id) {
                    item.item = action.payload.item
                }
            }
            )  
            let list = state.todoList.map((item) => { return {item: item.item, done: item.done, id: item.id}  })
            setToLocalStorage("toDoList", JSON.stringify(list))
        },

        setCheck: (state,action) => {
                     
            // eslint-disable-next-line
            state.todoList.map(item=>{ //iterate thru the list
                    if(action.payload.id===item.id){
                        if(item.done){
                            item.done=false
                        } else{
                            item.done=true
                        }
                    }
                   
            })
             let list = state.todoList.map((item) => { return {item: item.item, done: item.done, id: item.id}  })
                    setToLocalStorage("toDoList", JSON.stringify(list))
        }
    }

});

export const {saveTodo} = todoSlice.actions
export const {setCheck} = todoSlice.actions
export const {deleteTodo} = todoSlice.actions
export const {editTodo} = todoSlice.actions
export const {setTodo} = todoSlice.actions

export const selectTodoList= state => state.todos.todoList
// CAUSES ERROR export const isChecked= state => state.todos.todoList.done
export default todoSlice.reducer