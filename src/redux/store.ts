import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer from "./reducers/suppliersReducer";

export const store = configureStore({
  reducer: {
    supplier: suppliersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;