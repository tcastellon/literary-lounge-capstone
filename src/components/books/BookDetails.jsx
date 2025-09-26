import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBookToLibrary,
  getBooksById,
  getBooksByReaderId,
  updateBookRead,
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
  const [book, setBook] = useState({});
  const [readerBooks, setReaderBooks] = useState([]);
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBooksById(bookId).then((bookObj) => {
      setBook(bookObj);
    });
  }, [bookId]);

  useEffect(() => {
    getBooksByReaderId(currentReader.id).then((readerBooksArray) => {
      setReaderBooks(readerBooksArray);
    });
  }, [currentReader]);

  const currentBookStatus = readerBooks.find(
    (readerBook) => readerBook.bookId === parseInt(bookId)
  );

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

  const changeReadStatus = () => {
    const updatedStatus = {
      id: currentBookStatus.id,
      readerId: currentBookStatus.readerId,
      bookId: currentBookStatus.bookId,
      read: !currentBookStatus.read,
    };

    updateBookRead(updatedStatus).then(() => {
      const updatedReaderBooks = readerBooks.map((readerBook) =>
        readerBook.id === currentBookStatus.id
          ? { ...readerBook, read: updatedStatus.read }
          : readerBook
      );
      setReaderBooks(updatedReaderBooks);
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
          {currentBookStatus && (
            <div className="book-status">
              Status: {currentBookStatus.read ? "Read" : "Unread"}
            </div>
          )}
        </div>

        <div>
          {!currentBookStatus && (
            <button
              className="btn-primary"
              onClick={() => handleAddToLibrary(book)}
            >
              Add to Library
            </button>
          )}

          {currentBookStatus && (
            <div className="btn-group">
              <button className="btn-primary" onClick={changeReadStatus}>
                Mark as {currentBookStatus.read ? "Unread" : "Read"}
              </button>

              {book.creatorId === currentReader.id && (
                <button
                  className="btn-secondary"
                  onClick={() =>
                    navigate(
                      `/readerlist/${currentReader.id}/editbook/${book.id}`
                    )
                  }
                >
                  Edit Book
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
