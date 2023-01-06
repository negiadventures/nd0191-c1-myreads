import { Link } from "react-router-dom";
import Book from "./Book";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

const SearchPage = ({ books, updateBooks }) => {
  const [newBooks, setNewBooks] = useState([]);
  const [query, setQuery] = useState("");

  const searchBook = (e) => {
    e.preventDefault();
    const q = e.target.value;
    setQuery(q);
    const queryStringSplit = q.toLowerCase().trim();
    if (q !== "") {
      const searchBooks = async () => {
        const res = await BooksAPI.search(queryStringSplit, 50);
        setNewBooks([]);
        if (res && res.length > 0) {
          books.forEach((element) => {
            res.map((re) =>
              re.id === element.id ? (re.shelf = element.shelf) : re
            );
          });
          const resBooks = res.filter((r) => r.imageLinks);
          setNewBooks(resBooks);
        }
      };
      searchBooks();
    }
  };

  const updateBook = (book) => {
    updateBooks(book);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchBook}
            value={query}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {newBooks
            .filter(
              (book) =>
                book.title.toLowerCase().includes(query.toLowerCase()) &&
                query !== ""
            )
            .map((b) => (
              <Book key={b.id} book={b} updateBook={updateBook}></Book>
            ))}
        </ol>
      </div>
    </div>
  );
};
SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default SearchPage;
