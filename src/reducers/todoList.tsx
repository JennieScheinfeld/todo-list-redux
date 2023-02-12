import {Todo} from "../types"
import * as actions from "../actions/constants"

const initialState = {
    counter: 0,
    todoList: {
        0: {
            text: 'My first Todo',
            completed: false
        }
      }
 };

export const todoList = (state = initialState, action: any) => {
    switch(action.type) {
      case actions.ADD_TODO:
        const newToDo: Todo = { 
            text: action.payload,
            completed: false
        }

        const newToDoList = {
            ...state.todoList, [state.counter + 1]: newToDo
        }
        return {
            todoList: newToDoList,
            counter: state.counter + 1
        }
      case actions.COMPLETED_TODO:
        const smallerList = state.todoList
    }
  }