import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import productSlice from "./productSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        profile: profileSlice,
        product: productSlice
    }
})

export default store;