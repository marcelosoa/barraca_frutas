import { createSlice } from "@reduxjs/toolkit";

interface FruitPropState {
  name: string,
  price: string,
  quantity: string,
  supplier: {}
}

const initialState: FruitPropState = {
  name: '',
  price: '',
  quantity: '',
  supplier: {},
};


const 