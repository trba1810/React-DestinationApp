import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
