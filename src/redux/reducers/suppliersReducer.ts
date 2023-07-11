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
        id: uuidv4()
      };
      state.suppliers.push(newSupplier);
    },
    removeSupplier: (state, action: PayloadAction<string>) => {
      state.suppliers = state.suppliers.filter(
        supplier => supplier.id !== action.payload
      );
    },
    addName: (state, action: PayloadAction<{ id: string, name: string }>) => {
      state.suppliers = state.suppliers.map(supplier => {
        if (supplier.id === action.payload.id) {
          return {
            ...supplier,
            name: action.payload.name
          };
        }
        return supplier;
      });
    },
    addCPF: (state, action: PayloadAction<{ id: string, cpf: string }>) => {
      state.suppliers = state.suppliers.map(supplier => {
        if (supplier.id === action.payload.id) {
          return {
            ...supplier,
            cpf: action.payload.cpf
          };
        }
        return supplier;
      });
    },
    addNumber: (state, action: PayloadAction<{ id: string, phone: string }>) => {
      state.suppliers = state.suppliers.map(supplier => {
        if (supplier.id === action.payload.id) {
          return {
            ...supplier,
            phone: action.payload.phone
          };
        }
        return supplier;
      });
    },
  },
});

export const { addSupplier, removeSupplier, addName, addCPF, addNumber } = supplierSlice.actions;
export default supplierSlice.reducer;
