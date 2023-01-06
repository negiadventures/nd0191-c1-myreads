import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import MyReads from "./MyReads";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI.js";
import BookDetail from "./BookDetail";
function App() {
  const shelves = [
    {
      id: "currentlyReading",
      shelf: "Currently Reading",
    },
    {
      id: "wantToRead",
      shelf: "Want to Read",
    },
    {
      id: "read",
      shelf: "Read",
    },
  ];
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getAllBooks();
  }, []);
  const updateBooks = (book) => {
    setBooks(books.filter((b) => b.id !== book.id).concat(book));
  };
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MyReads
              shelves={shelves}
              books={books}
              updateBooks={updateBooks}
            ></MyReads>
          }
        />
        <Route
          exact
          path="/search"
          element={
            <SearchPage books={books} updateBooks={updateBooks}></SearchPage>
          }
        />
        <Route
          path="/book/:id"
          element={<BookDetail books={books}></BookDetail>}
        />
      </Routes>
    </div>
  );
}

export default App;
