import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World longest escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "mostly mountains",
      },
      {
        name: "New Zeland",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {},
});

export const destinationReducer = destinationSlice.reducer;
