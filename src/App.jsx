import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookList } from "./components/books/BookList";
import { Home } from "./components/home/Home";
//import { Nav } from "./components/nav/Nav";
import { BookDetails } from "./components/books/BookDetails";
import { ReaderList } from "./components/readers/ReaderList";
import { ReaderNav } from "./components/nav/ReaderNav";
import { ReaderDetails } from "./components/readers/ReaderDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ReaderNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="booklist">
          <Route index element={<BookList />} />
          <Route path=":bookId" element={<BookDetails />} />
        </Route>
        <Route path="readerlist">
          <Route index element={<ReaderList />} />
          <Route path=":readerId" element={<ReaderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
