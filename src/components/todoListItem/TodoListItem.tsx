import {TodoItem} from './style'
import { toggleTodo } from '../../features/currentTodos/TodosSlice'
import { StoreDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';

interface TodoListItemProps {
    id: string;
    text: string;
    completed: boolean;
    showCheckBox: boolean
  }

export const TodoListItem = (props: TodoListItemProps) => {
    const dispatch: StoreDispatch = useDispatch()



    const onToggle = () => {
      dispatch(toggleTodo({ completed: !props.completed, id: props.id}))
  }

    return <TodoItem strikeThrough={props.completed}>
      <div>
        
      </div>
         {props.showCheckBox ? <input type="checkbox"
         style={{ 'marginRight': '10px'}}
        checked={props.completed}
        onChange={onToggle}/> : null}
        {props.text}
    </TodoItem>
   
}