import { useEffect, useState } from "react";
import {
  addBookToLibrary,
  addNewBook,
  getAllBooks,
  getAllGenres,
} from "../../service/bookService";
import "./Forms.css"

export const AddBookForm = ({ currentReader }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: "",
    read: false,
  });
  const [genres, setGenres] = useState([])

  useEffect(() => {
    getAllGenres().then(genreArray => {
      setGenres(genreArray)
    })
  }, [])

  const handleAddNewBook = (event) => {
    event.preventDefault();

    const newBook = {
      creatorId: currentReader.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      image: book.image,
      description: book.description,
    };
    getAllBooks().then((books) => {
      const duplicate = books.find(
        (bookObj) =>
          bookObj.title.toLowerCase() === newBook.title.toLowerCase() &&
          bookObj.author.toLowerCase() === newBook.author.toLowerCase()
      );
      if (duplicate) {
        window.alert("Book already exists!");
      } else {
        addNewBook(newBook).then((addedBook) => {
          const newReaderBook = {
            readerId: currentReader.id,
            bookId: addedBook.id,
            read: book.read,
          };
          addBookToLibrary(newReaderBook).then(() => {
            setBook({
              title: "",
              author: "",
              genre: "",
              description: "",
              image: "",
              read: false,
            });
          });
        });
      }
    });
  };

  return (
    <div className="form-container">
      <form className="book-form">
        <h2>New Book</h2>
        <fieldset>
          <div>
            <label>Book Title: </label>
            <input
              type="text"
              value={book.title}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.title = event.target.value;
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
              value={book.author}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.author = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Genre: </label>
            <select
              value={book.genre}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.genre = event.target.value;
                setBook(bookCopy);
              }}
            >
              <option value="">Select a genre ...</option>
              {genres.map(genre => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Image Link: </label>
            <input
              type="text"
              value={book.image}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.image = event.target.value;
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
              value={book.description}
              onChange={(event) => {
                const bookCopy = { ...book };
                bookCopy.description = event.target.value;
                setBook(bookCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <button className="form-btn" onClick={handleAddNewBook}>Add Book</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
