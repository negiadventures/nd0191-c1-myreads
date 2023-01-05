import BookShelfOptions from "./BookShelfOptions";
import * as BooksAPI from "./BooksAPI.js";
const Book = ({ book, updateBook }) => {
  const changeShelf = (value) => {
    const update = () => {
      book.shelf = value;
      updateBook(book);
      BooksAPI.update(book, value);
    };
    update();
  };
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <BookShelfOptions
            changeShelf={changeShelf}
            currentShelf={book.shelf}
          ></BookShelfOptions>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    </li>
  );
};
export default Book;
