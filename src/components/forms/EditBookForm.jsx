import { useEffect, useState } from "react";
import {
  getBooksByReaderId,
  updateBook,
  updateBookRead,
} from "../../service/bookService";
import { useNavigate, useParams } from "react-router-dom";
import "./Forms.css";

export const EditBookForm = ({ currentReader }) => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBooksByReaderId(currentReader.id).then((booksArray) => {
      const bookObj = booksArray.find(
        (book) => book.bookId === parseInt(bookId)
      );
      setBook(bookObj);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateBook = () => {
    const updatedBook = {
      id: book.book.id,
      creatorId: book.book.creatorId,
      title: book.book.title,
      author: book.book.author,
      genre: book.book.genre,
      image: book.book.image,
      description: book.book.description,
    };
    const updatedBookRead = {
      id: book.id,
      readerId: book.readerId,
      bookId: book.bookId,
      read: book.read,
    };
    updateBook(updatedBook);
    updateBookRead(updatedBookRead);
    navigate(`/readerlist/${currentReader.id}`);
  };

  return (
    <div className="form-container">
      <form className="book-form">
        <h2>Edit Book</h2>
        <fieldset>
          <div>
            <label>Book Title: </label>
            <input
              type="text"
              value={book.book?.title || ""}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.book.title = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Author: </label>
            <input
              type="text"
              value={book.book?.author || ""}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.book.author = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Genre: </label>
            <input
              type="text"
              value={book.book?.genre || ""}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.book.genre = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Image Link: </label>
            <input
              type="text"
              value={book.book?.image || ""}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.book.image = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Brief Description: </label>
            <input
              type="text"
              value={book.book?.description || ""}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.book.description = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>
              Read Book?
              <input
                type="checkbox"
                checked={book.read || false}
                onChange={(event) => {
                  const bookReadCopy = { ...book };
                  bookReadCopy.read = event.target.checked;
                  setBook(bookReadCopy);
                }}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <button className="form-btn" onClick={handleUpdateBook}>
              Save Book
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
