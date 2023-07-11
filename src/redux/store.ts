import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer from "./reducers/suppliersReducer";
import fruitsReducer from "./reducers/fruitsReducer";

export const store = configureStore({
  reducer: {
    supplier: suppliersReducer,
    fruits: fruitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;