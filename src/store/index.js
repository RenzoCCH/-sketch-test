import { configureStore } from "@reduxjs/toolkit";
import documentSlice from "./document-slice";

const store = configureStore({
  reducer: {
    document: documentSlice.reducer,
  },
});

export default store;
