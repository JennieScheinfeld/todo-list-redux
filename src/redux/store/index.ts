import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {todoListSlice as todoListReducer} from '../../features/todoList/todoListSlice'
export const store = configureStore({
  reducer: combineReducers({
    todos: todoListReducer.reducer
  }),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;