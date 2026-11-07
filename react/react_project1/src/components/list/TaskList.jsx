import React, { useState } from 'react'
export default function TaskList() {
    const taskArr = [ // Local Variable
        { id: 1, title: 'Complete Angular assignment', completed: false },
        { id: 2, title: 'Review pull requests', completed: true },
        { id: 3, title: 'Prepare project report', completed: false },
        { id: 4, title: 'Attend team meeting', completed: true },
        { id: 5, title: 'Update documentation', completed: false },
    ];
    const [tasks, setTasks] = useState(taskArr);
    const [filter, setFilter] = useState('All');
    const toggleTask = (id) => {
        let updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        setTasks(updatedTasks);
    }
    const filteredTasks = tasks.filter(task =>
        filter === "Completed" ? task.completed :
        filter === "Pending" ? !task.completed : true
    )
    const completedCount = tasks.filter(task=>task.completed).length;
    return <>
        <h3 className="text-center">Task List</h3>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
        </select>
        {
            filteredTasks.map(task => (
                <div key={task.id}>
                    <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.title}
                    </span>
                </div>
            ))
        }
        <h4>{completedCount} out of {tasks.length} tasks are completed</h4>
    </>
}