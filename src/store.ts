import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/logInAnSignUp";
import dataControlReducer from "./slices/dataControl"

export const myStore = configureStore({
  reducer: {
    userData: userDataReducer,
    dataControl:dataControlReducer,
  },
});
