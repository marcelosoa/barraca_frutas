import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setUserData } from "../slices/suppliersSlice";

interface FruitsPropsState {
  name: string;
  price: string;
  quantity: string;
  suppliers: {};
}

const initialState: FruitsPropsState = {
  name: "",
  price: "",
  quantity: "",
  suppliers: {},
};

const suppliersReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    setUserData,
    (state, action: PayloadAction<FruitsPropsState>) => {
      const { name, price, quantity, suppliers } = action.payload;
      state.name = name;
      state.price = price;
      state.quantity = quantity;
      state.suppliers = suppliers;
    }
  );
});

export default suppliersReducer;
