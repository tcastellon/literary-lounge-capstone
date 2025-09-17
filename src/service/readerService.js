export const getAllReaders = () => {
    return fetch(`http://localhost:8088/readers?_embed=booksRead`).then(res => res.json())
}

export const getReaderById = (readerId) => {
    return fetch(`http://localhost:8088/readers/${readerId}?_embed=booksRead`).then(res => res.json())
}

export const getBooksByReaderId = (readerId) => {
    return fetch(`http://localhost:8088/booksRead?readerId=${readerId}&_expand=book`).then(res => res.json())
}