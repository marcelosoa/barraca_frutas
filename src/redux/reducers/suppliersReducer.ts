import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Supplier {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  fruits: string[]
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
    searchSupplier: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.suppliers = state.suppliers.filter(supplier =>
        supplier.name.toLowerCase().includes(searchTerm)
      );
    },
    loadSuppliers: (state, action: PayloadAction<Supplier[]>) => {
      state.suppliers = action.payload
    }
  },
});

export const { addSupplier, removeSupplier, loadSuppliers, searchSupplier } = supplierSlice.actions;

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
