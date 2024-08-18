import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  cartCount: number;
}

const initialState: CounterState = {
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.cartCount += action.payload;
    },
    setCartCount: (state, action: PayloadAction<number>) => {
      state.cartCount = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setCartCount } =
  cartSlice.actions;

export default cartSlice.reducer;
