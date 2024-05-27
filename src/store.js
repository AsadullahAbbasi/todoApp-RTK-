import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
const store = configureStore({
  reducer: {
    todoreducer: todoSlice.reducer,
  },
});
export default store;
