import * as Style from './style'


interface BarSelectionProps {
    onCurrentTodos: React.MouseEventHandler<HTMLButtonElement>;
    onCompletedTodos: React.MouseEventHandler<HTMLButtonElement>;
  }

export const BarSelection = (props: BarSelectionProps) => {
    return <Style.Container>
            <button onClick={props.onCurrentTodos}>
                Current todos
            </button>
            <button onClick={props.onCompletedTodos}>
                Completed todos
            </button >
        </Style.Container>
    
   
}

export default BarSelection