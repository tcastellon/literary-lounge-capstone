import { useEffect, useState } from "react";
import { getAllBooks } from "../../service/bookService";

export const BookList = () => {
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        getAllBooks().then((books) => {
            setBookList(books)
        })
        
    }, [])
    
    return (
        <div>
          <h2>Books</h2>
          <ul>{bookList.map((book) => {
            return <li>{book.title}:
            <span> {book.description}</span></li>
          })}
          </ul>
        </div>
    )
}