import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
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
      const newFruit: Fruit = {
        ...action.payload,
        id: uuidv4()
      }
      state.fruits.push(newFruit);
      AsyncStorage.setItem('fruits', JSON.stringify(state.fruits))
    },
    removeFruit: (state, action: PayloadAction<string>) => {
      state.fruits = state.fruits.filter((fruit) => fruit.id !== action.payload);
      AsyncStorage.setItem('fruits', JSON.stringify(state.fruits))
    },
    updateFruit: (state, action: PayloadAction<Fruit>) => {
      const index = state.fruits.findIndex((fruit) => fruit.id === action.payload.id);
      if (index !== -1) {
        state.fruits[index] = action.payload;
        AsyncStorage.setItem('fruits', JSON.stringify(state.fruits))
      }
    },
    loadFruits: (state, action: PayloadAction<Fruit[]>) => {
      state.fruits = action.payload;
    },
  },
});

export const { addFruit, removeFruit, updateFruit, loadFruits } = fruitSlice.actions;

export const fetchFruits = () => (dispatch: any) => {
  AsyncStorage.getItem('fruits')
    .then((fruitsData) => {
      if (fruitsData) {
        const fruits = JSON.parse(fruitsData);
        dispatch(loadFruits(fruits));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fruitSlice.reducer;
