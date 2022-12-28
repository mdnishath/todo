import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "data",
  initialState: {
    todos: [],
  },
  reducers: {
    todoData(state, action) {
      state.todos = action.payload;
    },
  },
});
export const { todoData } = todoSlice.actions;
export default todoSlice.reducer;
