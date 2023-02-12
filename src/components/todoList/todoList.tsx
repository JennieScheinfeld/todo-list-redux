import {TodoListItem} from '../todoListItem/TodoListItem'
import {Todo} from '../../types'
import * as Style from './style'


interface TodoListProps {
    todoList: { [key: string]: Todo };
    defaultString: string;
  }


export const TodoList = (props: TodoListProps) => {

    const ids = Object.keys(props.todoList)


    return <>
    <Style.todos>
    {ids.length ?ids.map(id => {
        const todo = props.todoList[id]
            return <TodoListItem showCheckBox={!todo.completed} key={id} id={id} text={todo.text} completed={todo.completed}/>
        } 
        ) : <h3 style={{ fontFamily: 'Josefin Sans, sans-serif'}}>{props.defaultString}</h3>}
    </Style.todos>
    </>
    
   
}

export default TodoList