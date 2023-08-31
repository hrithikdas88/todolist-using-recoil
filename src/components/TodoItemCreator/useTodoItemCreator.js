import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../atoms/todoListState";
import { getId } from "../../utils/id";

const useTodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldtodoList) => [
      ...oldtodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    onChange,
    addItem,
  };
};

export default useTodoItemCreator;
