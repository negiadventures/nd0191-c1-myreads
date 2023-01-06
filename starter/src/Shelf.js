import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ shelfName, books, updateBooks }) => {
  const updateBook = (book) => {
    updateBooks(book);
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} updateBook={updateBook}></Book>
          ))}
        </ol>
      </div>
    </div>
  );
};
Shelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
};
export default Shelf;
