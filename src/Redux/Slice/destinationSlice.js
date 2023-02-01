import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "Najveci lift na svetu",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Velike Planine",
      },
      {
        name: "New Zeland",
        days: 14,
        fact: "Poslednja zemlja naseljena ljudima",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
  },
});

export const { destinationClicked } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
