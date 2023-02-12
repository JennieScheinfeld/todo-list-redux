import * as Style from './style'
import { useState } from "react";


interface BarSelectionProps {
    onCurrentTodos: React.MouseEventHandler<HTMLButtonElement>;
    onCompletedTodos: React.MouseEventHandler<HTMLButtonElement>;
  }

export const BarSelection = (props: BarSelectionProps) => {

    const [selection, setSelection] = useState({ })

    return <Style.Container>
            <Style.StyledButton onClick={props.onCurrentTodos} >
                Current todos
            </Style.StyledButton>
            <Style.StyledButton onClick={props.onCompletedTodos}>
                Completed todos
            </Style.StyledButton >
        </Style.Container>
    
   
}

export default BarSelection