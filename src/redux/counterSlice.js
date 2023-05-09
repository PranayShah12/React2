import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "pranay"
    },
    reducers: {

    }
})

// always export reducer
export default numberSlice.reducer