import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SupplierState {
  name: string;
  cpf: string;
  phone: string;
  fruits: string[];
}

const initialState: SupplierState = {
  name: "",
  cpf: "",
  phone: "",
  fruits: [],
};

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCPF: (state, action: PayloadAction<string>) => {
      state.cpf = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setFruits: (state, action: PayloadAction<string[]>) => {
      state.fruits = action.payload;
    },
  },
});

export const { setName, setCPF, setPhone, setFruits } = supplierSlice.actions;
export default supplierSlice.reducer;