import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: { user: {}, book: {} },
  showEdit: false,
  showAddBooks: false,
  search: "",
  users: JSON.parse(localStorage.getItem("garduationProjectUsers") || "[]"),
  categoryName: "",
  show2: false,
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
    addBook: (state, action) => {
      state.users = action.payload;

      localStorage.setItem(
        "garduationProjectUsers",
        JSON.stringify(state.users)
      );
    },
    sendCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
    showCategoryList: (state, action) => {
      state.show2 = action.payload;
    },
  },
});

export default dataControl.reducer;

export const {
  showBookData,
  closeAndShowEditWindows,
  closeAndShowAddBooksWindows,
  searchReducer,
  addBook,
  sendCategoryName,
  showCategoryList,
} = dataControl.actions;
