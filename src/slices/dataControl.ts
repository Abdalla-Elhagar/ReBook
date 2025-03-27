import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: { user: {}, book: {} },
  showEdit: false,
  showAddBooks: false,
  search:""
};
const dataControl = createSlice({
  name: "dataControl",
  initialState,
  reducers: {
    showBookData: (state, action) => {
      state.bookData.user = action.payload.user;
      state.bookData.book = action.payload.book;
    },
    closeAndShowEditWindows: (state, action) => {
      state.showEdit = action.payload;
    },
    closeAndShowAddBooksWindows: (state, action) => {
      state.showAddBooks = action.payload;
    },
    searchReducer: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default dataControl.reducer;

export const {
  showBookData,
  closeAndShowEditWindows,
  closeAndShowAddBooksWindows,
  searchReducer,
} = dataControl.actions;
