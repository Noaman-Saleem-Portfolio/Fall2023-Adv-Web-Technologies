import React from 'react'

const CreateTodo = () => {
  return (
    <div className='container'>
        <h1>Create Todo</h1>

        <form>
            <input type="text" placeholder="Todo Title" />
            <input type="text" placeholder="Todo Description" />

            <button>Create</button>
        </form>
    </div>
  )
}

export default CreateTodo