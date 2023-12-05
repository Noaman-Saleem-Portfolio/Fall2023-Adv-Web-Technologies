import React from "react";
import { useTodoContext } from "../../context/todoContext";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const todoData = useTodoContext();
  // console.log(todoData);
  const { todos, delTodo } = todoData;

  const handleDelete = (id) => {
    delTodo(id);
  };

  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{ border: "1px solid black", marginBottom: "15px" }}
          >
            <h2>{todo.title}</h2>
            {/* style={{ textDecoration: "line-through" }} */}
            <p>{todo.description}</p>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{ backgroundColor: "red", padding: "5px", color: "white" }}
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/update-todo/${todo.id}`)}
              style={{
                backgroundColor: "green",
                padding: "5px",
                color: "white",
              }}
            >
              Upate
            </button>
            <button
              style={{
                backgroundColor: "grey",
                padding: "5px",
                color: "white",
              }}
            >
              Is Complete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
