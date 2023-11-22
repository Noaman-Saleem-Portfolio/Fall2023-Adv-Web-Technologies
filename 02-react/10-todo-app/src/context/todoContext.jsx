import { createContext, useContext, useReducer } from "react";

import todoReducer from "./todoReducer";

// Create the initial state
const initialState = {
    todos: [{
        id: Date.now(),
        title:"Todo 1",
        description: "Complte this todo"
    }]
}

//Create Todo context
const TodoContext = createContext(initialState)

//Use the Context
export const useTodoContext = () => useContext(TodoContext)

// Create a Provider for the Todo Context
export const TodoContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(todoReducer, initialState)

     // Actions for Todos

        // Delete Existing Todo Action
        function delTodo(id) {
            dispatch({
                type: 'DELETE_TODO',
                payload: id
            });
        }

        // Add New Todo Action
        function addTodo(todo) {
            dispatch({
                type: 'ADD_TODO',
                payload: todo
            })
        }
 
    return <TodoContext.Provider value={{
        todos : state.todos,
        delTodo,
        addTodo
    }}>
        {children}
    </TodoContext.Provider>
}