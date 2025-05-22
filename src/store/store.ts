import { configureStore } from '@reduxjs/toolkit';
import  workerSlice  from './slices/workerSlice';
export const store = configureStore({
  reducer: {
    employee:workerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch