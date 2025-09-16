import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookList } from "./components/books/BookList";
import { Home } from "./components/home/Home";
import { Nav } from "./components/nav/Nav";
import { BookDetails } from "./components/books/BookDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Nav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="booklist">
          <Route index element={<BookList />} />
          <Route path=":bookId" element={<BookDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
