import React, { useState } from "react";
import {TodoItem} from './style'
import { CiEdit } from "react-icons/ci";



interface TodoListItemProps {
    text: string;
    completed: boolean
  }

export const TodoListItem = (props: TodoListItemProps) => {
    // const [text, setText] = useState('')
    const [completed, setCompleted] = useState(props.completed);
    return <TodoItem strikeThrough={completed}>
         <input type="checkbox"
        defaultChecked={completed}
        onChange={() => setCompleted(!completed)}
      />
        {props.text}
        { !completed ? <CiEdit onClick={() => console.log('click')}/> : null}
    </TodoItem>
   
}