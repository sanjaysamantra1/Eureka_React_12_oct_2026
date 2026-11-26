import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addToDo } from '../../features/todo/ToDoSlice';

export default function AddToDo() {
    const dispatch = useDispatch();
    const myRef1 = useRef();
    const addNewToDo = () => {
        const actionObj = addToDo(myRef1.current.value);
        dispatch(actionObj);
        myRef1.current.value = '';
    };
    return <>
        <input ref={myRef1} /> &nbsp;
        <button onClick={addNewToDo}>Add New ToDo</button>
    </>
}