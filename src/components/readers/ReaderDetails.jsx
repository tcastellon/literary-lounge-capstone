import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReaderById } from "../../service/readerService";
import { deleteBook, getBooksByReaderId } from "../../service/bookService";

export const Reader = ({ reader }) => {
  return (
    <section>
      <header>{reader.name}</header>
      <div>{reader.narrative}</div>
      <div>
        # of books read:{" "}
        {reader.booksRead.filter((book) => book.read === true).length}
      </div>
    </section>
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
      <div>
        <h3>{reader.name}</h3>
        <div>{reader.narrative}</div>
        <div>
          # of books read: {books.filter((book) => book.read === true).length}
        </div>
      </div>
      <div>
        <h1>Library</h1>
        <button
          onClick={() => {
            navigate("addbook");
          }}
        >
          Add Book
        </button>
        {books.map((book) => {
          return (
            <div key={book.book.id}>
              <h3>{book.book.title}</h3>
              <div>{book.book.author}</div>
              <div>{book.book.genre}</div>
              <img src={book.book.image} alt={book.title} />
              <div>{book.book.description}</div>
              <div>Completed? {book.read ? <p>Yes</p> : <p>No</p>}</div>
              <span>
                {currentReader.id === book.book.creatorId &&
                  currentReader.id === reader.id && <button>Edit</button>}
                {currentReader.id === reader.id && (
                  <button
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
