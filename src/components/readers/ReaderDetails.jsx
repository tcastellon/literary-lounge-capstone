import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooksByReaderId, getReaderById } from "../../service/readerService";

export const Reader = ({ reader }) => {
  return (
    <section>
      <header>{reader.name}</header>
      <div>{reader.narrative}</div>
      <div># of books read: {reader.booksRead.filter(book => book.read === true).length}</div>
    </section>
  );
};

export const ReaderDetails = () => {
  const [reader, setReader] = useState({});
  const [books, setBooks] = useState([]);
  const { readerId } = useParams();

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

  return (
    <>
      <div>
        <header>{reader.name}</header>
        <div>{reader.narrative}</div>
        <div># of books read: {books.filter(book => book.read === true).length}</div>
      </div>
      <div>
        <header>Library</header>
        {books.map((book) => {
          return (
            <div key={book.book.id}>
              <header>{book.book.title}</header>
              <div>{book.book.author}</div>
              <div>{book.book.genre}</div>
              <img src={book.book.image} alt={book.title} />
              <div>{book.book.description}</div>
              <div>Completed? {book.read ? <p>Yes</p> : <p>No</p>}</div>
              <span>
                <button>Edit</button>
                <button>Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
