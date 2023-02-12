import React, { useState } from "react";

interface TodoListItemProps {
    text: string;
  }

export const TodoListItem = (props: TodoListItemProps) => {
    const [text, setText] = useState('')
    // add edit text and the edit buttonwill have setText func
    return <div>
        {props.text}
    </div>
   
}