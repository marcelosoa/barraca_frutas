import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SupplierPropsState {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  fruits: {};
}

const initialState: SupplierPropsState = {
  id: 0,
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
      const { id, name, cpf, phone, fruits } = action.payload;
      state.id = id;
      state.name = name;
      state.cpf = cpf;
      state.phone = phone;
      state.fruits = fruits;
    },
  },
});

export const { setUserData } = supplierSlice.actions;
export default supplierSlice.reducer;
