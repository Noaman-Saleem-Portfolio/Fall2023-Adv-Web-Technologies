import React from "react";
import booksData from "../../assets/booksData";

import "./Books.css";
import BookItem from "../../components/BookItem/BookItem";

const Books = () => {
  return (
    <>
      <div className="container">
        <h1>Books for Sale</h1>
        <div className="booksList">
          {booksData.map((book) => {
            // console.log(book);
            return (
              <BookItem
                key={book.id}
                image={book.image}
                title={book.title}
                price={book.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Books;
