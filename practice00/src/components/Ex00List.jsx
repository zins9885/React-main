import React from 'react'
import Ex00ListItem from './Ex00ListItem'
import { useContext } from 'react'
import { TodoContext } from '../context/Ex00TodoContext'

const Ex00List = () => {
    const {todos} = useContext(TodoContext)
    
  return (
    <div>
        <h1>Todo-List</h1>
        {todos.map((item)=>
            <Ex00ListItem todo={item}/>
        )}
        

    </div>
  )
}

export default Ex00List