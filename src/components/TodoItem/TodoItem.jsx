import React from "react";
import useTodoItem from "./useTodoItem";
import "./TodoItem.scss"; 

const TodoItem = ({ item }) => {
  const { editItemText, toggleItemCompletion, deleteItem } = useTodoItem(item);

  return (
    <div className="TodoItem">
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;