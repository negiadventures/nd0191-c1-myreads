import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import PropTypes from "prop-types";
const MyReads = ({ shelves, books, updateBooks }) => {
  const updateBook = (book) => {
    updateBooks(book);
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.shelf}
              shelfName={shelf.shelf}
              books={books.filter((book) => book.shelf === shelf.id)}
              updateBooks={updateBook}
            ></Shelf>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="show-search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

MyReads.propTypes = {
  selves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default MyReads;
