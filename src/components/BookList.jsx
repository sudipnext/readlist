import BookShow from "./BookShow"
import UseBooksContext from "../hooks/use-books-context"

const BookList = () => {
  const { books } = UseBooksContext();
  const booklists = books.map((book)=>{
    return <BookShow key={book.id} book={book}/>
  })
  return (
    <div className="flex flex-wrap">
        {booklists}
    </div>
  )
}

export default BookList