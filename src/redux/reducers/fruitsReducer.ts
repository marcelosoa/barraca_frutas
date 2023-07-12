import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Fruit {
  id: string;
  name: string;
  price: string;
  quantity: number;
  supplier: string;
}

interface FruitState {
  fruits: Fruit[];
}

const initialState: FruitState = {
  fruits: [],
};

const fruitSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {
    addFruit: (state, action: PayloadAction<Fruit>) => {
      state.fruits.push(action.payload);
    },
    removeFruit: (state, action: PayloadAction<string>) => {
      state.fruits = state.fruits.filter((fruit) => fruit.id !== action.payload);
    },
    updateFruit: (state, action: PayloadAction<Fruit>) => {
      const index = state.fruits.findIndex((fruit) => fruit.id === action.payload.id);
      if (index !== -1) {
        state.fruits[index] = action.payload;
      }
    },
  },
});

export const { addFruit, removeFruit, updateFruit } = fruitSlice.actions;

export default fruitSlice.reducer;
