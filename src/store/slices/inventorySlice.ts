import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { InventoryInitialState, InventoryType } from '../../types/types'

const initialState: InventoryInitialState = {
    inventory:[
      {
id:11,
    name:"Lagonda",//
    category:"sdv",//
    count:3,//
    prices:4,//
    total:12,
    date:"12-12-2022",//
    balance:"string",//
    desc:"sdfdsfvfb",
      },
    ],
}

export const counterSlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addNewInventor:(state:InventoryInitialState,action:PayloadAction<InventoryType>)=>{
      const newInventoryItem={
        ...action.payload,
        total:action.payload.count*action.payload.prices,
      }
      state.inventory.push(newInventoryItem);
    },
    deleteInventor:(state:InventoryInitialState,action:PayloadAction<number>)=>{
      state.inventory=state.inventory.filter((inventor)=>inventor.id!==action.payload)
    },
    changeInventor:(state:InventoryInitialState,action:PayloadAction<InventoryType>)=>{
      const inventorIndex=state.inventory.findIndex(item=>item.id===action.payload.id)
      state.inventory[inventorIndex]=action.payload
    }
  },
})

export const {addNewInventor,deleteInventor,changeInventor  } = counterSlice.actions

export default counterSlice.reducer