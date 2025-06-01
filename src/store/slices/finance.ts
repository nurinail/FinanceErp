import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FinanceInitialState, PaymentMetodType } from "../../types/types";
import { useSelector } from "react-redux";
import type { RootState } from "../store";



const initialState: FinanceInitialState = {
  cashAmount: 0,
  bankAmount: 0,
  debitorAmount: 0,
  liabilityAmount: 0,
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    handleCalculate:(state:FinanceInitialState,action:PayloadAction<PaymentMetodType>)=>{
        if(action.payload.method==="cash-in"){
            state.cashAmount+=action.payload.amount;
            return
        }
        if(action.payload.method==="bank-in"){
            state.bankAmount+=action.payload.amount;
            return
        }
        if(action.payload.method==="debitor-in"){
            state.debitorAmount+=action.payload.amount;
            return
        }
        if(action.payload.method==="cash-out"){
            state.cashAmount-=action.payload.amount;
            return
        }
        if(action.payload.method==="bank-out"){
            state.bankAmount-=action.payload.amount;
            return
        }
        if(action.payload.method==="loan-in"){
            state.liabilityAmount+=action.payload.amount;
            return
        }
    }
  },
});

export const {handleCalculate} = financeSlice.actions;

export default financeSlice.reducer;
