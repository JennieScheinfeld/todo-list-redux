import {Todo} from "../../types"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { store } from "redux/store";


const initialState = {
  currentToDosCounter: 0,
  completedToDosCounter: 0,
    currentTodos: {
        0: {
            text: 'My first Todo',
            completed: false
        }
      },
      completedTodos: {}
 };

export const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = { 
        text: action.payload,
        completed: false
    }

    state.currentToDosCounter += 1
    state.currentTodos = {...state.currentTodos, [state.currentToDosCounter]: newTodo}
    
    },
    toggleTodo: (state, action: PayloadAction<{id: string, completed: boolean}>) => {
      console.log('store:', store)
      const {completed, id} = action.payload
      const todo: Todo = (state.currentTodos as { [key: string]: Todo })[id]
      delete (state.currentTodos as { [key: string]: Todo })[id]

      state.completedToDosCounter += 1
      state.completedTodos = {...state.completedTodos, [state.completedToDosCounter]: {...todo, completed}}
    }
  },
})

export const { addTodo, toggleTodo } = TodosSlice.actions

export default TodosSlice.reducer