import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ERPState } from "../../types/types";



const initialState:ERPState={
    inventory:[],
    sales:[],
}

export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{

    }
})
export const { } = productSlice.actions;

export default productSlice.reducer;