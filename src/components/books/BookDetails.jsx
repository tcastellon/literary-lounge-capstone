import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addBookToLibrary, getBooksById, getBooksByReaderId } from "../../service/bookService";

export const Book = ({ book }) => {
  return (
    <section>
      <header>{book.title}</header>
      <img src={book.image} alt={book.title} />
    </section>
  );
};

export const BookDetails = ({ currentReader }) => {
  const [book, setBook] = useState([]);
  const [readerBooks, setReaderBooks] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    getBooksById(bookId).then((bookObj) => {
      setBook(bookObj);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getBooksByReaderId(currentReader.id).then((readerBooksArray) => {
      setReaderBooks(readerBooksArray);
    });
  }, [currentReader]);

  const handleAddToLibrary = (book) => {
    const newReaderBook = {
      readerId: currentReader.id,
      bookId: book.id,
      read: false
    }
    addBookToLibrary(newReaderBook).then((savedReaderBook) => {
      setReaderBooks([...readerBooks, savedReaderBook])
    })
  }

  return (
    <>
      <div>
        <header>{book.title}</header>
        <div>{book.author}</div>
        <div>{book.genre}</div>
        <img src={book.image} alt={book.title} />
        <div>{book.description}</div>
      </div>
      <div>
        {!readerBooks.some((readerBook) => readerBook.bookId === book.id) && (
          <button onClick={() => handleAddToLibrary(book)}>Add to Library</button>
        )}
      </div>
    </>
  );
};
