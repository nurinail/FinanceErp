import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { OtherInitialState } from '../../types/types'


const initialState:OtherInitialState = {
  loading:false
}

export const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
   handleLoading:(state:OtherInitialState,action:PayloadAction<boolean>)=>{
    state.loading=action.payload
   }
  },
})

export const { handleLoading} = otherSlice.actions

export default otherSlice.reducer