import React from "react";
import useTodoItemCreator from "./useTodoItemCreator";
import "./TodoItemCreator.scss";

const TodoItemCreator = () => {
  const { inputValue, onChange, addItem } = useTodoItemCreator();

  console.log(inputValue);

  return (
    <div className="todo-item-creator">
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
