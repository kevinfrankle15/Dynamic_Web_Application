import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
const slice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
