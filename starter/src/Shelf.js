import Book from "./Book";
const Shelf = ({ shelfName, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book}></Book>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
