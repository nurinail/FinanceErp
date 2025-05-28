import { configureStore } from '@reduxjs/toolkit';
import  workerSlice  from './slices/workerSlice';
import  productSlice  from './slices/productSlice';
export const store = configureStore({
  reducer: {
    product:productSlice,
    employee:workerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch