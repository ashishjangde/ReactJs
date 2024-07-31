import {configureStore} from "@reduxjs/toolkit"
import todoReducers from "../features/Todo/TodoSlice"
export const Store = configureStore({
   reducer:todoReducers
})