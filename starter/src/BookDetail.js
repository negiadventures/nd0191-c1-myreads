import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BookDetail = ({ books }) => {
  const id = useParams().id;
  const book = !books ? {} : books.filter((b) => b.id === id);
  return book.length === 0 ? (
    <div className="list-book">
      <div className="list-book-title">
        <Link to="/" className="close-book">
          Close
        </Link>
        <h1>Book</h1>
      </div>
      <div className="invalidBook">
        <center>
          <h1>Please try again with valid id.</h1>
        </center>
      </div>
    </div>
  ) : (
    <div className="list-book">
      <div className="list-book-title">
        <Link to="/" className="close-book">
          Close
        </Link>
        <h1>Book</h1>
      </div>
      <div className="left">
        <div
          className="book-cover"
          style={{
            width: 320,
            height: 480,
            backgroundSize: "100%",
            backgroundImage: `url(${book[0].imageLinks.thumbnail})`,
          }}
        ></div>
      </div>
      <div className="right">
        <div className="title">
          <b>Title:</b> {book[0].title}
        </div>
        <div className="subtitle">{book[0].subtitle}</div>
        <div className="authors">
          <b>Authors:</b> {book[0].authors.join(", ")}
        </div>
        <div className="publisher">
          <b>Published By:</b> {book[0].publisher}, {book[0].publishedDate}
        </div>
        <div className="description">
          <b>Description:</b> {book[0].description}
        </div>
        <div className="readingModes">
          <b>Reading Modes:</b>{" "}
          {book[0].readingModes.text && book[0].readingModes.image
            ? "Text | Image"
            : book[0].readingModes.text
            ? "Text"
            : book[0].readingModes.text
            ? "Image"
            : ""}
        </div>
        <div className="page">
          <b>Pages:</b> {book[0].pageCount}
        </div>
        <div className="language">
          <b>Language:</b> {book[0].language}
        </div>
      </div>
    </div>
  );
};
BookDetail.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookDetail;
