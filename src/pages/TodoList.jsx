import React from "react";
import TodoItemCreator from "../components/TodoItemCreator/TodoItemCreator";
import TodoItem from "../components/TodoItem/TodoItem";
import {  useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>

      <h1>Todo</h1>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
