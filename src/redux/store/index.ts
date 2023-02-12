import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {TodosSlice} from '../../features/currentTodos/TodosSlice'
export const store = configureStore({
  reducer: combineReducers({
    todos: TodosSlice.reducer
  }),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;