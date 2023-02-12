import React, { useState } from "react";
import { StoreState } from '../../redux/store';
import { useSelector } from 'react-redux';
import {TodoListItem} from '../todoListItem/TodoListItem'
import {Todo} from '../../types'
import {Form} from '../form/Form'
import { log } from "console";
import { useDispatch } from 'react-redux';
import { StoreDispatch } from '../../redux/store';



// interface TodoListContainerProps {
//     todos:  Array<Todo>;
// }

export const TodoListContainer = () => {

    const { todoList } = useSelector((state: StoreState) => state);


    const firstTodo: Todo = {
        text: 'My first Todo',
        completed: false
      }
    const dispatch = useDispatch<StoreDispatch>();

    const [todos, setToDos] = useState([firstTodo])

    const addTodo = (todo: Todo) : void => {
        console.log('here!')
        setToDos([...todos, todo])
    }


    return <>
    <h2>Todo List:</h2>
    {todos.map(todo => {
            return <TodoListItem text={todo.text}/>
        } 
        )}
    <Form onSubmit={addTodo}/>
    </>
   
}