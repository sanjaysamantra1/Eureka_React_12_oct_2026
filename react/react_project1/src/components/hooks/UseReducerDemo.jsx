import React, { useReducer, useRef } from 'react'

const initialTasks = [
    { id: 1, title: "Complete Javascript Assignment", complete: false },
    { id: 2, title: "Learn React Redux", complete: true },
    { id: 3, title: "Learn Java SpringBoot", complete: true },
];
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": return [...state, action.payload];
        case "DELETE": return state.filter(task => task.id !== action.id);
        case "TOGGLE": return state.map(task =>
            task.id === action.id ? { ...task, complete: !task.complete } : task
        );
        default: return state;
    }
};


export default function UseReducerDemo() {
    const [taskArr, dispatch] = useReducer(reducer, initialTasks);
    const taskRef = useRef();

    const addTask = (title) => dispatch({
        type: "ADD",
        payload: { id: taskArr.length + 1, title, complete: false }
    });

    const toggleTask = (id) => dispatch({ type: "TOGGLE", id });
    const deleteTask = (id) => dispatch({ type: "DELETE", id });

    return <div className="container mt-4" style={{ maxWidth: "650px" }}>
        <h3 className="text-center mb-4">Task List using useReducer</h3>
        <div className="d-flex mb-4">
            <input ref={taskRef} className="form-control me-2" placeholder="Enter task" />
            <button className="btn btn-primary" onClick={() => addTask(taskRef.current.value)}>
                Add Task
            </button>
        </div>
        {taskArr.map(task => (
            <div key={task.id} className="d-flex align-items-center border rounded p-2 mb-2">
                <input className="form-check-input me-2" type="checkbox"
                    checked={task.complete} onChange={() => toggleTask(task.id)} />
                <span className={`flex-grow-1 ${task.complete ? "text-decoration-line-through" : ""}`}>
                    {task.title}
                </span>
                <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>
        ))}
    </div>
}
