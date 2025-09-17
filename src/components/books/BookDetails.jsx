import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooksById } from "../../service/bookService";


export const Book = ({ book }) => {
  return (
    <section>
      <header>{book.title}</header>
      <img src={book.image} alt={book.title} />
    </section>
  )
}

export const BookDetails = () => {
  const [book, setBook] = useState([])
  const { bookId } = useParams()

  useEffect(() => {
    getBooksById(bookId).then((bookObj) => {
      setBook(bookObj)
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
    <div>
      <header>{book?.title}</header>
      <div>{book.author}</div>
      <div>{book.genre}</div>
      <img src={book.image} alt={book.title}/>
      <div>{book.description}</div>
    </div>
    <div>
      <button>Add to Library</button>
    </div>
    </>
  );
};