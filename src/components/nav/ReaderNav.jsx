import { Link } from "react-router-dom"
export const ReaderNav = () => {
    
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/booklist">Books</Link>
            </li>
            <li>
                <Link to="/readerlist">Readers</Link>
            </li>
        </ul>
    )
}