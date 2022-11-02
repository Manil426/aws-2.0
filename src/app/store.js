import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//THE GLOBLE STORE SETUP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
