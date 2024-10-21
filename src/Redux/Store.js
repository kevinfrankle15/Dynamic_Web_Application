import { configureStore } from "@reduxjs/toolkit";
import productCount from "../Redux/Slicer";
export const store = configureStore({
  reducer: {
    addProduct: productCount,
  },
});
