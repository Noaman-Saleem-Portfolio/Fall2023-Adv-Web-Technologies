import React, { useState } from 'react'

import "./Room.css"

const Room = () => {
    const [isLit,setIsLit] = useState(true)

    function toggleLight(){
        // setIsLit(!isLit)

        setIsLit((pre) => {
            return !pre
        })
    }

  return (
    <div className={`container room ${isLit ? "light" : "dark"}`}>
        <h1>Room is {isLit ? "Lit" : "Dark"}</h1>

        <button onClick={toggleLight}>Light Switch</button>
        <br />
        <br />
        <button onClick={toggleLight}>{`${isLit ? "OFF" : "ON"}`}</button>
    </div>
  )
}

export default Room