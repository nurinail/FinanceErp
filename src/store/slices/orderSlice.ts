import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { OrderInitialState, OrderType } from "../../types/types";

const initialState: OrderInitialState = {
  orders: [],
  customers: [
    {
      id: 1,
      name: "IKT",
      contract: "file1",
      date: "02-02-2025",
    },
    {
      id: 2,
      name: "AzinTecomZIN",
      contract: "file2",
      date: "02-04-2025",
    },
  ],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder:(state:OrderInitialState,action:PayloadAction<OrderType>)=>{
      state.orders.push(action.payload)
    }
  },
});

export const {addOrder} = orderSlice.actions;

export default orderSlice.reducer;
