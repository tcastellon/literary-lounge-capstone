import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Nav.css"

export const ReaderNav = () => {
    const navigate = useNavigate()
    
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/booklist">Books</Link>
            </li>
            <li className="navbar-item">
                <Link to="/readerlist">Readers</Link>
            </li>
            {localStorage.getItem("lounge_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                className="navbar-link"
                to=""
                onClick={() => {
                    localStorage.removeItem("lounge_user")
                    navigate("/", { replace: true })
                }}
                >
                Logout
                </Link>
            </li>
        ) : (
          ""
        )}
        </ul>
    )
}