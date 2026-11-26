import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";

export const myStore = configureStore({
    reducer: {
        counter: counterReducer,
    },
});