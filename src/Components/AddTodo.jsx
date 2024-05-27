import todoSlice from "../slices/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
function TodoForm() {
  const todo = useSelector((state) => state.todoreducer);
  const [inputValue, setInputValue] = useState("");
  console.log(todo);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoSlice.actions);
    dispatch(todoSlice.actions.addTodo(inputValue));
    setInputValue("");
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
