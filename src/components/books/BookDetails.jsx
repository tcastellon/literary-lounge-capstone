import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addBookToLibrary,
  getBooksById,
  getBooksByReaderId,
} from "../../service/bookService";
import "./Book.css";

export const Book = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3 className="book-title">{book.title}</h3>
    </div>
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
      read: false,
    };
    addBookToLibrary(newReaderBook).then((savedReaderBook) => {
      setReaderBooks([...readerBooks, savedReaderBook]);
    });
  };

  return (
    <div className="book-details-container">
      <section className="book">
        <div>
          <header className="book-header">{book.title}</header>
          <div className="book-author">{book.author}</div>
          <div className="book-genre">{book.genre}</div>
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-description">{book.description}</div>
        </div>
        <div>
          {!readerBooks.some((readerBook) => readerBook.bookId === book.id) && (
            <button
              className="btn-primary"
              onClick={() => handleAddToLibrary(book)}
            >
              Add to Library
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
