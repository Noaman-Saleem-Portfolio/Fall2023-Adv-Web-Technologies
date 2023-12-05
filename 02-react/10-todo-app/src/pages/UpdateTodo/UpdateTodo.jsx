import React, { useState } from "react";
import { useTodoContext } from "../../context/todoContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //   console.log(id);

  const todoData = useTodoContext();
  // console.log(todoData);
  const { todos } = todoData;

  const specificTodo = todos.filter((todo) => {
    // console.log(typeof todo.id);
    return todo.id === Number(id);
  });

  //   console.log(specificTodo);

  //getting form data
  const [title, setTitle] = useState(specificTodo[0].title);
  const [description, setDescription] = useState(specificTodo[0].description);

  const handleDescriptionData = (e) => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("title", title);
    console.log("description", description);

    //Write the Update Function in reducer
    //Hint : send this todo id as  function parameter
    //Use .map function to update the current state in reducer
  };

  return (
    <div className="container">
      <h1>Update Todo</h1>

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

        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
