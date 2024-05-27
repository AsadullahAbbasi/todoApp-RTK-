import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import todoSlice from "./slices/todoSlice";
import { useSelector } from "react-redux";
const App = () => {
  const todoSlice = useSelector((state) => state.todoreducer);
  // console.log(todoSlice);
  return (
    <div className="px-4 my-10 flex flex-col gap-5">
      <AddTodo />
      {todoSlice.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default App;
