import {Todo} from "../../types"
import * as actions from "../../actions/constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import currentTodos from "components/todoList/todoList";


const initialState = {
  currentToDosCounter: 0,
  completedToDosCounter: 0,
    currentToDos: {
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
    state.currentToDos = {...state.currentToDos, [state.currentToDosCounter]: newTodo}
    
    },
    toggleTodo: (state, action: PayloadAction<{id: string, completed: boolean}>) => {
      // const {completed, id} = action.payload
      // const removedList: { [key: string]: Todo }  = completed ? state.currentToDos : state.completedTodos
      // const addToDoList: { [key: string]: Todo }  = completed ? state.completedTodos : state.currentToDos
      // const toDo: Todo = removedList[id]
      // delete removedList[id]
      // addToDoList[id] = toDo

      const {completed, id} = action.payload
      const todo: Todo = (state.currentToDos as { [key: string]: Todo })[id]
      delete (state.currentToDos as { [key: string]: Todo })[id]

      state.completedToDosCounter += 1
      state.completedTodos = {...state.completedTodos, [state.completedToDosCounter]: todo}
    }
  },
})

export const { addTodo, toggleTodo } = TodosSlice.actions

export default TodosSlice.reducer