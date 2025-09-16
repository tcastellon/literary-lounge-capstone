export const getAllBooks = () => {
    return fetch(`http://localhost:8088/books`).then(res => res.json())
}

export const getBooksById = (bookId) => {
    return fetch(`http://localhost:8088/books/${bookId}`).then(res => res.json())
}