import Book from "./Book";
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
            <Book key={book.title} book={book} updateBook={updateBook}></Book>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
