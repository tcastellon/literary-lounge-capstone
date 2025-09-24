export const getAllBooks = () => {
  return fetch(`http://localhost:8088/books`).then((res) => res.json());
};

export const getBooksById = (bookId) => {
  return fetch(`http://localhost:8088/books/${bookId}`).then((res) =>
    res.json()
  );
};

export const getBooksByReaderId = (readerId) => {
  return fetch(
    `http://localhost:8088/booksRead?readerId=${readerId}&_expand=book`
  ).then((res) => res.json());
};

export const addBookToLibrary = (newReaderBook) => {
  return fetch(`http://localhost:8088/booksRead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReaderBook),
  }).then((res) => res.json());
};

export const addNewBook = (newBook) => {
  return fetch(`http://localhost:8088/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  }).then((res) => res.json());
};

export const deleteBook = (bookId) => {
  return fetch(
    `http://localhost:8088/booksRead/${bookId}`,
    {
      method: "DELETE",
    }
  );
};

export const updateBook = (book) => {
  return fetch(`http://localhost:8088/books/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  })
}

export const updateBookRead = (book) => {
  return fetch(`http://localhost:8088/booksRead/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  })
}