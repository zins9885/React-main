import React from "react";
import "./App.css";

import { TodoContext } from "./context/Ex00TodoContext";

import Ex00AddTodo from "./components/Ex00AddTodo";
import Ex00List from "./components/Ex00List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "React 복습하기 ", completed: false },
    { text: "Spring 복습하기", completed: false },
  ]);
  // const [newTodos, setnewTodos] = useState("");
  const [newTodos, setnewTodos] = useState("");
  //newTodo에 값 추가해주는 함수
  const handleNewTodo = (e) => {
    setnewTodos(e.target.value);
  };

  //setTodos 배열 안에 새로운 할일 추가해주는 함수
  const handleTodoAddition = () => {
    setTodos([...todos, { text: newTodos, completed: false }]);
    setnewTodos("");
  };

  const handlelinebar = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };

  const handleTodoDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        newTodos,
        setnewTodos,
        handleTodoAddition,
        handleNewTodo,
        handlelinebar,
        handleTodoDelete,
      }}
    >
      <div>
        <Ex00List />
        <Ex00AddTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
