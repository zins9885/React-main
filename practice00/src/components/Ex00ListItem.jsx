import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/Ex00TodoContext";

const Ex00ListItem = ({ todo, index }) => {
  const { handlelinebar, handleTodoDelete } = useContext(TodoContext);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          handlelinebar(index);
        }}
      ></input>
      <label
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </label>
      <button
        onClick={() => {
          handleTodoDelete(index);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Ex00ListItem;
