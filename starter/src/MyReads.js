import { Link } from "react-router-dom";
import Shelf from "./Shelf";
const MyReads = ({ shelves, books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              shelfName={shelf.shelf}
              books={books.filter((book) => book.shelf_id === shelf.id)}
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
export default MyReads;
