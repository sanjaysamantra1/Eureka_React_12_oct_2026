import { useDispatch } from 'react-redux'
import { deleteToDo, toggleToDo } from '../../features/todo/ToDoSlice';

export default function ToDo({ todoObj }) {
    const dispatch = useDispatch();
    const deleteMyTodo = (id) => {
        const actionObj = deleteToDo(id);
        dispatch(actionObj)
    }
    const toggleMyTodo = (id) => {
        const actionObj = toggleToDo(id);
        dispatch(actionObj)
    }
    return <>
        <li>
            <span style={{ textDecoration: todoObj.isCompleted ? 'line-through' : 'none' }}>
                {todoObj.text}
            </span> &nbsp;
            <button onClick={() => { deleteMyTodo(todoObj.id) }}>DELETE</button> &nbsp;
            <button onClick={() => { toggleMyTodo(todoObj.id) }}>TOGGLE</button> &nbsp;
        </li>
    </>
}