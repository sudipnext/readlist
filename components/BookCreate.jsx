import { useState } from "react";
import UseBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = UseBooksContext();

  const handleBookCreation = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="flex flex-col justify-end p-4">
      <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Add Book Section
      </h3>
      <form onSubmit={handleBookCreation}>
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Title
            </label>
            <input
              type="text"
              id="first_name"
              onChange={handleOnChange}
              value={title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:py-2.5"
              required
            />
          </div>

          <button type="submit" className=" w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-20 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;
