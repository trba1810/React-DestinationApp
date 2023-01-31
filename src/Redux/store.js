import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
  },
});

console.log(store.getState());
