import React from 'react'
import { useTodoContext } from '../../context/todoContext'

const Todos = () => {
  const todoData = useTodoContext()
  // console.log(todoData);
  const {todos} = todoData
  return (
    <div className='container' >
      {todos.map((todo) => {
        return (<div key={todo.id} style={{border:"1px solid black",marginBottom:"15px"}}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>)
      })}
    </div>
  )
}

export default Todos