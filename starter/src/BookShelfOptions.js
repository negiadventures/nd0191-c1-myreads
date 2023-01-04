import { useState } from "react";
const BookShelfOptions = ({ changeShelf, currentShelf }) => {
  const [sh, setSh] = useState(currentShelf);
  const updateShelf = (e) => {
    setSh(e.target.value);
    changeShelf(e.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} value={sh}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default BookShelfOptions;
