import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: 'productPrice',
    initialState,
})

export default productSlice.reducer