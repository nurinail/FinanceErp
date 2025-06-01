import { configureStore } from '@reduxjs/toolkit';
import inventorySlice from "./slices/inventorySlice";
import  workerSlice  from './slices/workerSlice';
import  historySlice  from './slices/history';
import  orderSlice from './slices/orderSlice';
import  financeSlice from './slices/finance';
export const store = configureStore({
  reducer: {
    inventory:inventorySlice,
    worker:workerSlice,
    history:historySlice,
    order:orderSlice,
    finance:financeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch