import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";
import { destinationReducer } from "./Slice/destinationSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    desinationStore: destinationReducer,
  },
});

console.log(store.getState());
