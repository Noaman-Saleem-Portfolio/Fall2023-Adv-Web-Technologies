import { createContext, useContext, useState } from "react";


//Create the context
const CounterContext = createContext(11)

export const useCounter = () => useContext(CounterContext)

// Create a Provider for the Global Context
export const CounterContextProvider = (prop) => {
    const [value,setValue] = useState(2)


    return (
        <CounterContext.Provider value={{value, setValue}}>
            {prop.children}
        </CounterContext.Provider>
    )
}