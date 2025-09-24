import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReaderById } from "../../service/readerService";
import { deleteBook, getBooksByReaderId } from "../../service/bookService";
import "./Reader.css";

export const Reader = ({ reader }) => {
  return (
    <>
      <div className="reader-header">{reader.name}</div>
      <div className="reader-narrative">{reader.narrative}</div>
      <div className="reader-stats">
        # of books read:{" "}
        {reader.booksRead.filter((book) => book.read === true).length}
      </div>
    </>
  );
};

export const ReaderDetails = ({ currentReader }) => {
  const [reader, setReader] = useState({});
  const [books, setBooks] = useState([]);
  const { readerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getReaderById(readerId).then((readerObj) => {
      setReader(readerObj);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getBooksByReaderId(readerId).then((booksArray) => {
      setBooks(booksArray);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (bookId) => {
    deleteBook(bookId).then(() => {
      getBooksByReaderId(readerId).then((booksArray) => {
        setBooks(booksArray);
      });
    });
  };

  return (
    <>
      <div className="reader-details-conatiner">
        <div className="reader-info">
          <h3>{reader.name}</h3>
          <div className="reader-narrative">{reader.narrative}</div>
          <div className="reader-stats">
            # of books read: {books.filter((book) => book.read === true).length}
          </div>
        </div>
      </div>
      <div className="library-section">
        <div className="library-header">
          <h1>Library</h1>
          {currentReader.id === reader.id && (
            <button
              className="add-book-btn"
              onClick={() => {
                navigate("addbook");
              }}
            >
              Add Book
            </button>
          )}
        </div>
        {books.map((book) => {
          return (
            <div className="book-item" key={book.book.id}>
              <h3>{book.book.title}</h3>
              <div className="book-author">{book.book.author}</div>
              <div className="book-genre">{book.book.genre}</div>
              <img
                src={book.book.image}
                alt={book.title}
                className="book-image"
              />
              <div className="book-description">{book.book.description}</div>
              <div className="book-status">
                Completed? {book.read ? <p>Yes</p> : <p>No</p>}
              </div>
              <div className="book-actions">
                {currentReader.id === reader.id && (
                  <button
                  className="edit-btn"
                    onClick={() => {
                      navigate(`editbook/${book.book.id}`);
                    }}
                  >
                    Edit
                  </button>
                )}
                {currentReader.id === reader.id && (
                  <button
                  className="delete-btn"
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
