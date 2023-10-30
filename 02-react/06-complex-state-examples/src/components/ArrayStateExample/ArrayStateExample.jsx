import React from "react";
import "./ArrayStateExample.css";
const ArrayStateExample = () => {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  const addElement = () => {
    // console.log(`button clicked!`);
    setThingsArray((prev) => {
      // console.log([...prev, "thing3"]);
      return [...prev, `Thing ${thingsArray.length + 1}`];
    });
  };
  return (
    <div>
      <button onClick={addElement}>Add Item</button>
      {thingsArray.map((thing) => {
        return <p key={thing}>{thing}</p>;
      })}
    </div>
  );
};

export default ArrayStateExample;