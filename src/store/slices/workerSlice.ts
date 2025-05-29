import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { WorkerInitialState, WorkersType } from '../../types/types'



const initialState:WorkerInitialState = {
  workers:[],
}

export const workerSlice = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    addWorker:(state:WorkerInitialState,action:PayloadAction<WorkersType>)=>{
        state.workers.push(action.payload)
    }
   
  },
})

export const { addWorker} = workerSlice.actions

export default workerSlice.reducer