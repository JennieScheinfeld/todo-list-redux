import React, { useState } from "react";
import { StoreState, StoreDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import {TodoListItem} from '../todoListItem/TodoListItem'
import {Todo} from '../../types'
import {Form} from '../form/Form'
import { useDispatch, connect } from 'react-redux';
import { addTodo } from '../../features/todoList/todoListSlice'
import * as actionTypes from '../../actions/constants'
import * as Style from './style'



export const CompletedTodos = () => {

    const { todos } = useSelector((state: StoreState) => state);
    const todoList: { [key: string]: Todo }  = todos.todoList || {}
    const ids = Object.keys(todoList)

    const dispatch: StoreDispatch = useDispatch()


    const onSubmit = (text: string) : void => {
        dispatch(addTodo(text))
    }


    return <Style.Container>
    <Style.todos>
    {ids.map(id => {
        const todo = todoList[id]
            return <TodoListItem key={id} text={todo.text} completed={todo.completed}/>
        } 
        )}
    </Style.todos>
    </Style.Container>
    
   
}

export default connect()(CompletedTodos)