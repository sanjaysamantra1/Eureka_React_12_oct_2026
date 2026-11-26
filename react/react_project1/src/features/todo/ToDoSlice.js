import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [
        { id: 1, text: "Learn React", isCompleted: false },
        { id: 2, text: "Complete Java Assignments", isCompleted: true },
    ]
}
// slice = reducers + action_creators
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: {
            reducer: (state, action) => {
                state.todoList.push(action.payload);
            },
            prepare: (text) => ({
                payload: {
                    id: Math.random() * 20,
                    text,
                    completed: false,
                }
            })
        },
        deleteToDo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
            return state;
        },
        toggleToDo: (state, action) => {
            state.todoList = state.todoList.map((toDo) =>
                toDo.id === action.payload ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo
            );
            return state;
        }
    }
})
// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo, toggleToDo } = todoSlice.actions; // Action Creators
export default todoSlice.reducer;