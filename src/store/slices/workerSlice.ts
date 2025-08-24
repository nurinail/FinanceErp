import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WorkerInitialState, WorkersType } from "../../types/types";

const initialState: WorkerInitialState = {
  workers: [
    {
      id: 1,
      desc: "stringnumber",
      date: "stringnumber", //
      name: "stringnumber", //
      email: "stringnumber", //
      number: 23, //
      position: "stringnumber", //
      department: "stringnumber", //
      place: "stringnumber", //
      salary: 12, //
    },
    {
      id: 1,
      desc: "stringnumber",
      date: "stringnumber", //
      name: "stringnumber", //
      email: "stringnumber", //
      number: 23, //
      position: "stringnumber", //
      department: "stringnumber", //
      place: "stringnumber", //
      salary: 12, //
    },
    {
      id: 1,
      desc: "stringnumber",
      date: "stringnumber", //
      name: "stringnumber", //
      email: "stringnumber", //
      number: 23, //
      position: "stringnumber", //
      department: "stringnumber", //
      place: "stringnumber", //
      salary: 12, //
    },
    {
      id: 1,
      desc: "stringnumber",
      date: "stringnumber", //
      name: "stringnumber", //
      email: "stringnumber", //
      number: 23, //
      position: "stringnumber", //
      department: "stringnumber", //
      place: "stringnumber", //
      salary: 12, //
    },
  ],
};

export const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    addWorker: (
      state: WorkerInitialState,
      action: PayloadAction<WorkersType>
    ) => {
      state.workers.push(action.payload);
    },
    deleteWorker: (
      state: WorkerInitialState,
      action: PayloadAction<number>
    ) => {
      state.workers = state.workers.filter(
        (item) => item.id !== action.payload
      );
    },
    changeWorker: (
      state: WorkerInitialState,
      action: PayloadAction<WorkersType>
    ) => {
      const workerIndex = state.workers.findIndex(
        (item) => item.id === action.payload.id
      );
      state.workers[workerIndex] = action.payload;
    },
  },
});

export const { addWorker, deleteWorker, changeWorker } = workerSlice.actions;

export default workerSlice.reducer;
