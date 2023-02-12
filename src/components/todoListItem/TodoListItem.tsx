import { useState } from "react";
import {TodoItem} from './style'
import { CiEdit } from "react-icons/ci";
import { toggleTodo } from '../../features/currentTodos/TodosSlice'
import { StoreDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';

interface TodoListItemProps {
    id: string;
    text: string;
    completed: boolean,
    showCheckBox: boolean
  }

export const TodoListItem = (props: TodoListItemProps) => {
    const [completed, setCompleted] = useState(props.completed);
    const dispatch: StoreDispatch = useDispatch()



    const onToggle = () => {
      setCompleted(!completed)
      dispatch(toggleTodo({ completed: !completed, id: props.id}))

  }

    return <TodoItem strikeThrough={completed}>
         {props.showCheckBox ? <input type="checkbox"
        defaultChecked={completed}
        onChange={onToggle}/> : null}
        {props.text}
    </TodoItem>
   
}