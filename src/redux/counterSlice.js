import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "pranay"
    },
    reducers: {
        increment: (state, action) => {
            state.number = state.number + Number(action.payload)
        },
        decrement: (state, action) => {
            state.number = state.number - action.payload
        }
    }
})

export const { increment, decrement } = numberSlice.actions;
// always export reducer
export default numberSlice.reducer