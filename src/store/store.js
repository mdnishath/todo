import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoSlice";

export const store = configureStore({
  reducer: {
    data: todo,
  },
});

export default store;
