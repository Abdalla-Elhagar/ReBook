import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: {},
  showEdit: false,
  showAddBooks: false,
  search: "",
  users: JSON.parse(localStorage.getItem("garduationProjectUsers") || "[]"),
  categoryName: "",
  show: false,
};
const dataControl = createSlice({
  name: "dataControl",
  initialState,
  reducers: {
    showBookData: (state, action) => {
      state.bookData = action.payload;
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
    controlInUserMenuInHeader: (state,action) => {
      state.show = action.payload
    }
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
  controlInUserMenuInHeader,
} = dataControl.actions;
