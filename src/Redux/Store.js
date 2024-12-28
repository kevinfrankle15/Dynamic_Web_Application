import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../Redux/UserDetialSlicer.js";
export const store = configureStore({
  reducer: {
    userDetails: userDetails,
  },
});
