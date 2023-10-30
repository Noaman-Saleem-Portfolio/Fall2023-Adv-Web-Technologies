import React, { useState } from "react";

import "./Counter.css";

export const Counter = () => {
  // ordinary variable
  // let value = 1

  //using state
  let [value,setValue] = useState(0)

  const increment = () => {
    // console.log("Increment button clicked!");
    // value = value + 1
    // console.log(value);

    setValue(value++)

  }

  const decrement = (e) => {
    // console.log("Decrement button clicked!");
    // console.log(e);

    // setValue(value--)

    setValue((pre) => {
      return pre - 1
    })
  }
  return (
    <div className="counter">
      <div className="counterBox">
      {/* <h1>Counter</h1> */}
      <div className="counterItems">
        <p>{value}</p>
        <div className="buttons">
          <button onClick={increment}>+</button>
          <button onClick={(e) => decrement(e)}>-</button>
        </div>
      </div>
      {/* counter-item */}
      </div>
      {/* counterBox */}
    </div>
    // container
  );
};

// export default Counter
