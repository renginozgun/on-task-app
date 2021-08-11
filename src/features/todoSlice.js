import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  todoList:[],

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state,action)=>{
            state.todoList.push(action.payload)
            
        },

       deleteTodo: (state,action) => {
           state.todoList = state.todoList.filter((item) => action.payload.id !== item.id)
       },   
       
       editTodo: (state,action) => {
       // console.log(state.todoList)
            state.todoList.map(item=> {

            if(action.payload.id===item.id){
                item.item=action.payload.NAME;
                
            }
                

            })
       },
        setCheck: (state,action) => {
            
            // eslint-disable-next-line
            state.todoList.map(item=>{ //iterate thru the list
                    if(action.payload===item.id){
                        if(item.done===true){
                            item.done=false
                        } else{
                            item.done=true
                        }
                    }
            })

        }
    }

});

export const {saveTodo} = todoSlice.actions
export const {setCheck} = todoSlice.actions
export const {deleteTodo} = todoSlice.actions
export const {editTodo} = todoSlice.actions

export const selectTodoList= state => state.todos.todoList
// CAUSES ERROR export const isChecked= state => state.todos.todoList.done
export default todoSlice.reducer