import {Todo} from '../../types'
import React, { useState } from "react";

interface FormProps {
    onSubmit: Function;
  }

export const Form = (props: FormProps) => {
    const [submittedText, setText] = useState('')
    const handleChange = (e: any) =>{
        setText(e.target.value);
      }

    // add edit text and the edit buttonwill have setText func
    return <form onSubmit={(e: any) => {
        e.preventDefault()
        const newTodo : Todo = {
            text: submittedText,
            completed: false

        }
        props.onSubmit(newTodo)
        setText('')
    }}>
    <div>
      <label>
       Todo:
      <input type="string" id={submittedText} value={submittedText} onChange={handleChange}/>
    </label>
     </div>
    <div>
    <input type="submit" value="Add todo" />
    </div>
    </form>
   
}