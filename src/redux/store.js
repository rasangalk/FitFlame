import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./AppbarTitleSlice";
export const store = configureStore({
  reducer: {
    setTitle: titleReducer,
  },
});
