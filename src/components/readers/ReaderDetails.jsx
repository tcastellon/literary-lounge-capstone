import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReadBooks, getReaderById } from "../../service/readerService";

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
  const [readBooks, setReadBooks] = useState([]);
  const { readerId } = useParams();

  useEffect(() => {
    getReaderById(readerId).then((readerObj) => {
      setReader(readerObj);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getReadBooks(readerId).then((booksArray) => {
      const completedBooks = booksArray.filter((book) => book.read === true);
      setReadBooks(completedBooks);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <header>{reader.name}</header>
        <div>{reader.narrative}</div>
        <div># of books read: {readBooks.length}</div>
      </div>
      <div>
        <header>Library</header>
        {readBooks.map((booksRead) => {
          return (
            <div key={booksRead.book.id}>
              <header>{booksRead.book.title}</header>
              <div>{booksRead.book.author}</div>
              <div>{booksRead.book.genre}</div>
              <img src={booksRead.book.image} alt={booksRead.title} />
              <div>{booksRead.book.description}</div>
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
