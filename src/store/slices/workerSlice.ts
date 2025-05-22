import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { EmployeeInitialState, EmployeeType } from "../../types/types";

const initialState: EmployeeInitialState = {
  workers: [],
  isWorkerTable: false,
};
export const workerSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    removeWorker: (
      state: EmployeeInitialState,
      action: PayloadAction<number>
    ) => {
      state.workers = state.workers.filter(
        (data) => data.id !== action.payload
      );
    },
    addWorker: (
      state: EmployeeInitialState,
      action: PayloadAction<EmployeeType>
    ) => {
      state.workers = [...state.workers, action.payload];
    },
    handleIsWorkerTable:(state: EmployeeInitialState)=>{
        state.isWorkerTable=!state.isWorkerTable
    }
  },
});

export const { addWorker, removeWorker,handleIsWorkerTable } = workerSlice.actions;

export default workerSlice.reducer;
