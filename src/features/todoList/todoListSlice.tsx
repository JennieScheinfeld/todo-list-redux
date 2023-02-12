import {Todo} from "../../types"
import * as actions from "../../actions/constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    counter: 0,
    todoList: {
        0: {
            text: 'My first Todo',
            completed: false
        }
      }
 };

export const todoListSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      console.log('in action file!')
      const newTodo: Todo = { 
        text: action.payload,
        completed: false
    }

    state.counter += 1
    state.todoList = {...state.todoList, [state.counter]: newTodo}
    
    }
  },
})

export const { addTodo } = todoListSlice.actions

export default todoListSlice.reducer