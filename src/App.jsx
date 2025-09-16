import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookList } from "./components/books/BookList";

function App() {
  return (
    <Routes>
      <Route path="/booklist" element={<BookList />} />
    </Routes>
  );
}

export default App;
