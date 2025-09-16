import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookList } from "./components/books/BookList";
import { Home } from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booklist" element={<BookList />} />
    </Routes>
  );
}

export default App;
