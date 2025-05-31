import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { OrderInitialState, OrderType } from "../../types/types";

const initialState: OrderInitialState = {
  orders: [
    {
          id:1,
    ordernumber:12341,
    customer:"IKT",//
    product:"Laqonda",//
    payment:"nağd",//
    desc:"Məhsul satışı",
    date:"02-02-2025",//
    total:250,
    count:5,//
    prices:50,//
    note:"Laqonda satışı",//
    },
    {
          id:2,
    ordernumber:12343,
    customer:"AzinTecom",//
    product:"Komputer",//
    payment:"nisyə",//
    desc:"Məhsul satışı",
    date:"02-04-2025",//
    total:4000,
    count:4,//
    prices:1000,//
    note:"Komputer satışı",//
    },
    {
          id:3,
    ordernumber:14343,
    customer:"IKT",//
    product:"Drujba",//
    payment:"nağd",//
    desc:"Məhsul satışı",
    date:"02-05-2025",//
    total:600,
    count:10,//
    prices:60,//
    note:"Drujba satışı",//
    },
  ],
  customers: [
    {
      id: 1,
      name: "IKT",
      contract: "file1",
      date: "02-02-2025",
    },
    {
      id: 2,
      name: "AzinTecom",
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
    },
    deleteOrder:(state:OrderInitialState,action:PayloadAction<number>)=>{
      state.orders=state.orders.filter((item)=>item.id!==action.payload)
    },
    handleFilter:(state:OrderInitialState,action:PayloadAction<string>)=>{
     
      
    }
  },
});

export const {addOrder,deleteOrder,handleFilter} = orderSlice.actions;

export default orderSlice.reducer;
