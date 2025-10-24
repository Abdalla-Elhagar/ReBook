import { createSlice } from "@reduxjs/toolkit";
import { UserTypes } from "../types/dataTypes";

interface initialStateTypes {
  token: string | null,
  email: string | null,
  logedInUser?: UserTypes | null
}

const initialState: initialStateTypes = {
  token: JSON.parse(localStorage.getItem("token") || "null"),
  email: JSON.parse(localStorage.getItem("email") || "null"),
  logedInUser: {
    name: "",
    email: "",
    password: "",
    phone: "",
  }
};
const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;

      localStorage.setItem("token", JSON.stringify(state.token))
      localStorage.setItem("email", JSON.stringify(state.email))
    },
    handleLogedInUser: (state,action) => {
      state.logedInUser = action.payload.find((user:UserTypes)=> user.email === JSON.parse(localStorage.getItem("email") || "null"))
    }
  },
});

export default userData.reducer;

export const { login, handleLogedInUser } = userData.actions;
