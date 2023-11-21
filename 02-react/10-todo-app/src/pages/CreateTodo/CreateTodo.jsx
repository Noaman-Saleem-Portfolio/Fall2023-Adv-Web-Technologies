import React, { useState } from "react";
import { useTodoContext } from "../../context/todoContext";
import {useNavigate} from "react-router-dom"

const CreateTodo = () => {
  const navigate = useNavigate()

  const todoData = useTodoContext();
  // console.log(todoData);
  const { todos, addTodo } = todoData;

  //getting form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDescriptionData = (e) => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({ id: Date.now(), title, description });

    navigate("/todos")
  };
  return (
    <div className="container">
      <h1>Create Todo</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Todo Description"
          onChange={(e) => handleDescriptionData(e)}
          value={description}
        />

        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
