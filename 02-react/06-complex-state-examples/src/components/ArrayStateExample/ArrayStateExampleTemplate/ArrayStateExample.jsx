import React from "react";
import "./ArrayStateExample.css";
const ArrayStateExample = () => {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

 
  return (
    <div>
      <button>Add Item</button>
      {thingsArray.map((thing) => {
        return <p key={thing}>{thing}</p>;
      })}
    </div>
  );
};

export default ArrayStateExample;