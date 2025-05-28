import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  ProductState,
  InventoryType,
  ChangedInventory,
} from "../../types/types";

const initialState: ProductState = {
  inventory: [],
  sales: [],
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNeWInventory: (state, action: PayloadAction<InventoryType>) => {
      state.inventory.push(action.payload);
      state.products.push(action.payload.name);
    },
    handleUpdatedInventory: (
      state,
      action: PayloadAction<{
        id: number;
        editedProduct: Partial<ChangedInventory>;
      }>
    ) => {
      const { id, editedProduct } = action.payload;
      const updatedInventory = state.inventory.find((item) => item.id === id);
      if (updatedInventory) {
        Object.assign(updatedInventory, editedProduct);
      }
    },
  },
});

export const { addNeWInventory,handleUpdatedInventory } = productSlice.actions;

export default productSlice.reducer;
