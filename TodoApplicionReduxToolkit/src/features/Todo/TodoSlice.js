import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1 , text:"hello Wolrld"}]
}

export const TodoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },                                  // state action always access   state ==>initial state , action ==> values
        removeTodo:(state,action) =>{      // action.payload gives you the value
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload ))
        }  
    }
})

export const {addTodo,removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;  // exporting reducer to store