import { useState } from "react";
import PropTypes from "prop-types";
const BookShelfOptions = ({ changeShelf, currentShelf }) => {
  const [sh, setSh] = useState(currentShelf ? currentShelf : "none");
  const updateShelf = (e) => {
    setSh(e.target.value);
    changeShelf(e.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} value={sh}>
        <option value="default" disabled>
          {currentShelf && currentShelf !== "none" ? "Move to..." : "Add to..."}
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
BookShelfOptions.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired,
};

export default BookShelfOptions;
