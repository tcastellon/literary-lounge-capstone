import { useEffect, useState } from "react";
import { getAllBooks } from "../../service/bookService";
import { Book } from "./BookDetails";
import { Link } from "react-router-dom";
import { BookFilter } from "./BookFilterBar";
import { getBooksByReaderId } from "../../service/bookService";

export const BookList = ({ currentReader }) => {
  const [books, setBooks] = useState([]);
  const [showReaderBooks, setShowReaderBooks] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  useEffect(() => {
    getBooksByReaderId(currentReader.id).then((readerBooksArray) => {
      if (showReaderBooks) {
        const readerBooks = readerBooksArray.map((item) => item.book);
        setFilteredBooks(readerBooks);
      } else {
        setFilteredBooks(books);
      }
    });
  }, [showReaderBooks, currentReader, books]);

  return (
    <div>
      <h2>Books</h2>
      <BookFilter setShowReaderBooks={setShowReaderBooks} />

      {filteredBooks.map((bookObj) => {
        return (
          <Link to={`/booklist/${bookObj.id}`} key={bookObj.id}>
            <Book book={bookObj} key={bookObj.id} />
          </Link>
        );
      })}
    </div>
  );
};
