import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {todoList as todoListReducer} from '../../reducers/todoList'
export const store = configureStore({
  reducer: combineReducers({
    todoList: todoListReducer
  }),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;