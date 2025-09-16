import { useEffect, useState } from "react";
import { getAllBooks } from "../../service/bookService";
import { Book } from "./BookDetails";
import { Link } from "react-router-dom";

export const BookList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAllBooks().then((books) => {
      setBookList(books);
    });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <article>
        {bookList.map((bookObj) => {
          return (
            <Link to={`/booklist/${bookObj.id}`} key={bookObj.id}>
              <Book book={bookObj} key={bookObj.id} />
            </Link>
          );
        })}
      </article>
    </div>
  );
};
