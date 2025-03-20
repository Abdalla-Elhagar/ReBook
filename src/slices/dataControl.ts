import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  bookData:{user:{} , book:{}}
};
const dataControl = createSlice({
  name: "dataControl",
  initialState,
  reducers: {
    showBookData:(state , action) => {
        state.bookData.user = action.payload.user;
        state.bookData.book = action.payload.book;
    }
    
  },
});

export default dataControl.reducer;

export const {showBookData} = dataControl.actions
