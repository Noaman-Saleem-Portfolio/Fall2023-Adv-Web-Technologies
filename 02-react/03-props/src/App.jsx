import Books from "./components/Books";
import booksData from "./booksData";

import "./App.css"

function App() {
  // const students = [<p>nomi</p>,<p>nomi</p>,<p>nomi</p>];
  // console.log(booksData);

  return (
    <>
      <h1>Books for Sale</h1>
      <hr />

      <div className="booksList">
        {booksData.map((book) => {
          // console.log(book);
          return (
            <Books
              key={book.id}
              image={book.image}
              title={book.title}
              price={book.price}
            />
          );
        })}
      </div>

      {/* <Books /> */}
    </>
  );
}

export default App;
