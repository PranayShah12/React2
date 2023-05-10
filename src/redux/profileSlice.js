import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: "pranay",
        city: "surat"
    },
    reducers: {

    }
})

export default profileSlice.reducer;