import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const ReaderNav = () => {
    const navigate = useNavigate()
    
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