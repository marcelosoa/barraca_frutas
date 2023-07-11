import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Fruit {
  id: string,
  name: string,
  price: string,
  quantity: number,
  supplier: string[]
}

interface FruitState {
  fruits: Fruit[]
}

const initialState: FruitState = {
  fruits: []
}

const fruitSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    addFruit: (state, action: PayloadAction<Fruit>) => {
      const newFruit: Fruit = {
        ...action.payload,
        id: uuidv4()
      };
      state.fruits.push(newFruit);
    },
  }
})

export const { addFruit } = fruitSlice.actions;

export default fruitSlice.reducer;
