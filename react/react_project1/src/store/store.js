import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import todoReducer from "../features/todo/ToDoSlice";

export const myStore = configureStore({
    reducer: {
        counter: counterReducer,
        todoReducer: todoReducer
    },
});