import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
  name: "document",
  initialState: {
    artboards: [],
    name: "",
  },
  reducers: {
    setDocument(state, action) {
      return action.payload;
    },
  },
});

export const documentActions = documentSlice.actions;

export default documentSlice;
