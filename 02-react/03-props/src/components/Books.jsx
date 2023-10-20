import React from "react";
import "./Books.css"

const Books = (prop) => {
    console.log(prop);

  return (
      <div className="card">
        <div className="bookImage">
          <img
            src={prop.image}
            alt=""
          />
        </div>
        <h2>{prop.title}</h2>
        <p>${prop.price}</p>
      </div>
  );
};

export default Books;
