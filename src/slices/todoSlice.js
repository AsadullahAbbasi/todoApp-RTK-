import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "asad todo slice",
  initialState: [
    {
      id: nanoid(),
      title: "Learn Redux",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      console.log("🚀 ~ action:", action);
      console.log("🚀 ~ state:", state);
      state.push({ id: nanoid(), title: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );
    },
    editTodo: (state, action) => {
      return state.map((todo) =>
        todo.id == action.payload.todoid
          ? { ...todo, title: action.payload.todoMsg }
          : { ...todo }
      );
    },
  },
});

export default todoSlice;
