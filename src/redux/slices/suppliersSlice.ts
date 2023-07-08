import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SupplierPropsState {
  name: string;
  cpf: string;
  phone: string;
  fruits: {};
}

const initialState: SupplierPropsState = {
  name: '',
  cpf: '',
  phone: '',
  fruits: {},
};

const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<SupplierPropsState>) => {
      const { name, cpf, phone, fruits } = action.payload;
      state.name = name;
      state.cpf = cpf;
      state.phone = phone;
      state.fruits = fruits;
    },
  },
});

export const { setUserData } = supplierSlice.actions;
export default supplierSlice.reducer;
