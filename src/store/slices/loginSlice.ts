import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { LoginSignUpInitialState, LoginType } from '../../types/types'


const initialState: LoginSignUpInitialState = {
 users:[
    {
        username:"nail",
        password:"12345678",
    },
 ],
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser:(state:LoginSignUpInitialState,action:PayloadAction<LoginType>)=>{
        state.users.push(action.payload);
    }
  },
}) 

export const {addUser} = loginSlice.actions

export default loginSlice.reducer