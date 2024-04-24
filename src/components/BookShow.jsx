import deletesvg from "../assets/delete.svg";
import editsvg from "../assets/edit.svg";
import { useState } from "react";
import BookEdit from "./BookEdit";
import UseBooksContext from "../hooks/use-books-context";

const BookShow = ({book}) => {

  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook } = UseBooksContext();

  const handleEdit=(id, newTitle)=>{
    setShowEdit(!showEdit);
  }
  const handleDelete=()=>{
    deleteBook(book.id);
  }

  let content = <div className="p-3 text-gray-700 text-lg font-bold break-words">{book.title}</div>
  if(showEdit){
    content = <BookEdit onSubmit={handleEdit} book={book}/>
  }
  return (
    <div className="container mx-auto bg-white rounded-lg w-64 h-64 overflow-hidden m-2">
      <div className="h-full w-full rounded-lg ">
        <div className="flex flex-col items-center justify-between border-b mb-52">
          {content}
          <div className="p-3 flex">
            <button onClick={handleEdit} className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
              <span>
                <img src={editsvg} alt="edit" className="w-4 h-4" />
              </span>
              <span>Edit</span>
            </button>
            <button onClick={handleDelete} className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
              <span>
                <img src={deletesvg} alt="delete" className="w-4 h-4" />
              </span>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShow;