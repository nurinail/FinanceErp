import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { EmployeeInitialState, EmployeeType } from '../../types/types'

const initialState :EmployeeInitialState={
workers:[],
}
export const workerSlice=createSlice({
name:"employee",
initialState,
reducers:{
addWorker:(state:EmployeeInitialState,action:PayloadAction<EmployeeType>)=>{
    state.workers=[...state.workers,action.payload]
}
}
})

export const {} = workerSlice .actions

export default workerSlice .reducer