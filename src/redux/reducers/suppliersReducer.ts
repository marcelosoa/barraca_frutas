import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'
interface Supplier {
  id: uuidv4();
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
