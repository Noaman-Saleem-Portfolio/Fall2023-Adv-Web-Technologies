import React from 'react'
import { useCounter } from '../context/counterContext'

const Child = (prop) => {
    // console.log(prop);

    const counter = useCounter()
    console.log(counter);

    // const {setValue, value}= prop
    const {value,setValue} = counter

    const increment = () => {
        console.log("Button Clicked!");

        setValue(value + 1)
    }
    
  return (
    <>
        {/* <p>Child Component Value = {prop.value}</p> */}
        <p>Child Component Value = {value}</p>

        <button onClick={increment}>Increment</button>

    </>
  )
}

export default Child