import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { updateBook } = useBooksContext();

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSave = (event) => {
    event.preventDefault();
    onSubmit();
    updateBook(book.id, title);
  };
  return (
    <form className="m-2 pl-10" onSubmit={handleSave}>
      <input
        value={title}
        onChange={handleInputChange}
        type="text"
        className="p-3 text-gray-700 text-lg font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
