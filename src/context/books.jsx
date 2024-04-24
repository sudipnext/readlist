import { createContext, useState } from "react";
import axios from "axios";
const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createBook = async (title) => {
    try {
      const response = await axios.post("http://localhost:3001/books", {
        title,
      });

      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async (id, newTitle) => {
    try {
      await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, title: newTitle } : book
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <BookContext.Provider
      value={{ books, fetchBooks, createBook, deleteBook, updateBook }}
    >
      {children}
    </BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
