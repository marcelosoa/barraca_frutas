import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      AsyncStorage.setItem('suppliers',  JSON.stringify(state.suppliers))
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
    loadSuppliers: (state, action: PayloadAction<Supplier[]>) => {
      state.suppliers = action.payload
    }
  },
});

export const { addSupplier, removeSupplier, addName, addCPF, addNumber, loadSuppliers } = supplierSlice.actions;

export const fetchSuppliers = () => (dispatch: any) => {
  AsyncStorage.getItem('suppliers')
    .then((supplierData) => {
      if (supplierData) {
        const suppliers = JSON.parse(supplierData);
        dispatch(loadSuppliers(suppliers))
      }
    })
    .catch((error) => {
      console.log(error)
    });
};

export default supplierSlice.reducer;
