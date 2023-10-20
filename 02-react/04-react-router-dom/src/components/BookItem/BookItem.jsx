import React from 'react'
import "./BookItem.css"

const BookItem = (prop) => {
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
  )
}

export default BookItem