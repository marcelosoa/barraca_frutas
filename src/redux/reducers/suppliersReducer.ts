import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Supplier {
  name: string;
  cpf: string;
  phone: string;
}

interface SupplierState {
  suppliers: Supplier[];
}

const initialState: SupplierState = {
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
  },
});

export const { addSupplier, removeSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;
