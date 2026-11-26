// Slice = Actions + Reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const counterSlice = createSlice({ // Slice = actions + reducers
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
        reset: () => {
            return 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;