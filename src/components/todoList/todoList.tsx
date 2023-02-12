import React, { useState } from "react";
import { StoreState, StoreDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import {TodoListItem} from '../todoListItem/TodoListItem'
import {Todo} from '../../types'
import { connect } from 'react-redux';
import * as Style from './style'


interface TodoListProps {
    todoList: { [key: string]: Todo };
  }


export const TodoList = (props: TodoListProps) => {

    const ids = Object.keys(props.todoList)


    return <>
    <Style.todos>
    {ids.map(id => {
        const todo = props.todoList[id]
            return <TodoListItem showCheckBox key={id} id={id} text={todo.text} completed={todo.completed}/>
        } 
        )}
    </Style.todos>
    </>
    
   
}

export default connect()(TodoList)