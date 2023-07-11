import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Supplier {
  id: string;
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
      const newSupplier: Supplier = {
        ...action.payload,
        id: uuidv4(),
      };
      state.suppliers.push(newSupplier);
    },
    removeSupplier: (state, action: PayloadAction<string>) => {
      state.suppliers = state.suppliers.filter(
        (supplier) => supplier.id !== action.payload
      );
    },
  },
});

export const { addSupplier, removeSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;
