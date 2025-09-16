import { Link } from "react-router-dom"

export const Nav = () => {
    
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/booklist">Book List</Link>
            </li>
        </ul>
    )
}