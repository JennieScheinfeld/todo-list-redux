import { StoreDispatch } from '../../redux/store';
import {Form} from '../form/Form'
import { useDispatch, connect } from 'react-redux';
import { addTodo } from '../../features/currentTodos/TodosSlice'
import * as Style from './style'
import {TodoList} from '../todoList/todoList'
import { useState } from "react";
import BarSelection from 'components/barSelection/BarSelection';
import { StoreState } from '../../redux/store';
import { useSelector } from 'react-redux';
import {Todo} from '../../types'



const displays = {
    CURRENT_TODOS: 'CURRENT_DISPLAY',
    COMPLETED_TODOS: 'COMPLETED_TODOS',
}


export const TodoContainer = () => {

    const [currentDisplay, setCurrentDisplay] = useState(displays.CURRENT_TODOS)
    const dispatch: StoreDispatch = useDispatch()
    const { todos } = useSelector((state: StoreState) => state);
    const currentTodos: { [key: string]: Todo }  = todos.currentTodos || {}
    const completedTodos: { [key: string]: Todo }  = todos.completedTodos || {}
    console.log('currentToDos:', currentTodos)
    console.log('completedTodos:', completedTodos)




    const onSubmit = (text: string) : void => {
        dispatch(addTodo(text))
        onCurrentTodos()
    }

    const onCurrentTodos = () => {
        setCurrentDisplay(displays.CURRENT_TODOS)
    }

    const onCompletedtTodos = () => {
        setCurrentDisplay(displays.COMPLETED_TODOS)
    }

    const showContent = () => {
        switch (currentDisplay) {
            case displays.CURRENT_TODOS:
                
                return <TodoList todoList={currentTodos} defaultString='Add more todos...'/>
            case displays.COMPLETED_TODOS:
                return <TodoList todoList={completedTodos} defaultString='No completed todos to show...'/>

        }
    }


    return <Style.Container>
    <Style.Title>Todo List:</Style.Title>
    <BarSelection onCurrentTodos={onCurrentTodos} onCompletedTodos={onCompletedtTodos}/>
    <Form onSubmit={onSubmit}/>
    {showContent()}
    </Style.Container>
    
   
}

export default connect()(TodoContainer)