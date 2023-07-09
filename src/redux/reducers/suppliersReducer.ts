import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Supplier {
  name: string;
  cpf: string;
  phone: string;
  fruits: string[];
}
interface SuppliersState {
  suppliers: Supplier[];
}

const initialState: SuppliersState = {
  suppliers: [],
};

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    addSupplier: (state, action: PayloadAction<Supplier>) => {
      state.suppliers.push(action.payload);
    },
    removeSupplier: (state, action: PayloadAction<number>) => {
      state.suppliers.splice(action.payload, 1);
    },
    updateSupplier: (state, action: PayloadAction<{ index: number; supplier: Supplier }>) => {
      const { index, supplier } = action.payload;
      state.suppliers[index] = supplier;
    },
  },
});

export const { addSupplier, removeSupplier, updateSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;