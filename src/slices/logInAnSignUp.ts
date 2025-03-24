import { createSlice } from "@reduxjs/toolkit";

import { localUsers } from "../data";

localStorage.getItem("garduationProjectUsers")
  ? null
  : localStorage.setItem("garduationProjectUsers", JSON.stringify(localUsers));



const initialState = {
  arrOfUsers: JSON.parse(
    localStorage.getItem("garduationProjectUsers") || "[]"
  ),
  loginUser: JSON.parse(localStorage.getItem("loginUser") || "[]"),
};
const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserToUsers: (state, action) => {
      state.arrOfUsers.push(action.payload);
      localStorage.setItem(
        "garduationProjectUsers",
        JSON.stringify(state.arrOfUsers)
      );
    },
    loginR: (state, action) => {
      state.loginUser = action.payload;
      localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
    },
  },
});

export default userData.reducer;

export const { addUserToUsers, loginR } = userData.actions;
