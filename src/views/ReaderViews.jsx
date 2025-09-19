import { Outlet, Route, Routes } from "react-router-dom";
import { ReaderNav } from "../components/nav/ReaderNav";
import { Home } from "../components/home/Home";
import { BookList } from "../components/books/BookList";
import { BookDetails } from "../components/books/BookDetails";
import { ReaderList } from "../components/readers/ReaderList";
import { ReaderDetails } from "../components/readers/ReaderDetails";

export const ReaderViews = ({ currentReader }) => {
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
          <Route index element={<BookList currentReader={currentReader}/>} />
          <Route path=":bookId" element={<BookDetails currentReader={currentReader}/>} />
        </Route>
        <Route path="readerlist">
          <Route index element={<ReaderList currentReader={currentReader} />} />
          <Route
            path=":readerId"
            element={<ReaderDetails currentReader={currentReader} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
