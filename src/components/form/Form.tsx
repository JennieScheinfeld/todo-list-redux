import { useState } from "react";
import * as Style from './style'
interface FormProps {
    onSubmit: Function;
  }

export const Form = (props: FormProps) => {
    const [submittedText, setText] = useState('')
    const handleChange = (e: any) =>{
        setText(e.target.value);
      }

    // add edit text and the edit buttonwill have setText func
    return <Style.StyledForm
    onSubmit={(e: any) => {
        e.preventDefault()

        props.onSubmit(submittedText)
        setText('')
    }}>
    <div>
      <label>
      <Style.StyledInputBox type="string" id={submittedText} value={submittedText} onChange={handleChange}/>
    </label>
     </div>
    <div>
    <Style.StyledButtons type="submit" value="Add todo" />
    </div>
    </Style.StyledForm>
   
}