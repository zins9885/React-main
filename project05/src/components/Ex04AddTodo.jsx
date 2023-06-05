import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/Ex04TodoContext'

const Ex04AddTodo = () => {


    const{newTodo, handleNewTodo,handleTodoAddition} = useContext(TodoContext)
  return (
    <div>
        <input type="text" onChange={handleNewTodo} value={newTodo}></input>
        <button onClick={handleTodoAddition}>추가</button>
    </div>
  )
}

export default Ex04AddTodo