import { useEffect, useState } from "react";
import { getAllBooks } from "../../service/bookService";
import { Book } from "./BookDetails";
import { Link } from "react-router-dom";

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div>
      {books.map((bookObj) => {
        return (
          <Link to={`/booklist/${bookObj.id}`} key={bookObj.id}>
            <Book book={bookObj} key={bookObj.id} />
          </Link>
        );
      })}
    </div>
  );
};
