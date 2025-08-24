import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice";
import workerSlice from "./slices/workerSlice";
import historySlice from "./slices/historySlice";
import orderSlice from "./slices/orderSlice";
import financeSlice from "./slices/financeSlice";
import loginSlice from "./slices/loginSlice";
import otherSlice from "./slices/otherSlice";
export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    worker: workerSlice,
    history: historySlice,
    order: orderSlice,
    finance: financeSlice,
    login: loginSlice,
    other: otherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
