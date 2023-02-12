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
    return <form style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px'}} onSubmit={(e: any) => {
        e.preventDefault()

        props.onSubmit(submittedText)
        setText('')
    }}>
    <div>
      <label>
      <input type="string" id={submittedText} value={submittedText} onChange={handleChange}/>
    </label>
     </div>
    <div>
    <input style={{marginLeft: '10px'}} type="submit" value="Add todo" />
    </div>
    </form>
   
}