import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/Ex00TodoContext";

const Ex00AddTodo = () => {
  const { newTodos, handleTodoAddition, handleNewTodo } =
    useContext(TodoContext);
  return (
    <div>
      <input type="text" onChange={handleNewTodo} value={newTodos} />
      <button onClick={handleTodoAddition}>추가</button>
    </div>
  );
};

export default Ex00AddTodo;
