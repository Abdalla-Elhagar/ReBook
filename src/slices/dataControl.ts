import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: { user: {}, book: {} },
  show: false,
};
const dataControl = createSlice({
  name: "dataControl",
  initialState,
  reducers: {
    showBookData: (state, action) => {
      state.bookData.user = action.payload.user;
      state.bookData.book = action.payload.book;
    },
    closeAndShowWindows: (state, action) => {
      state.show = action.payload;
    },
  },
});

export default dataControl.reducer;

export const { showBookData, closeAndShowWindows } = dataControl.actions;
