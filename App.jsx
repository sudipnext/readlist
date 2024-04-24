import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);
  
  return (
    <div>
      <h1 className="font-extrabold text-5xl text-white text-center my-4">
        ReadList Application
      </h1>
      <BookList  />
      <BookCreate />
    </div>
  );
};

export default App;
