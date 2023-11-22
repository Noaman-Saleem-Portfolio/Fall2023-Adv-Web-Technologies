export default (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      console.log({ ...state });
      return {
        // ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "ADD_TODO":
      console.log({ ...state });
      return {
        // ...state,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};
