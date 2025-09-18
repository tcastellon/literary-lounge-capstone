import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookList } from "./components/books/BookList";
import { Home } from "./components/home/Home";
//import { Nav } from "./components/nav/Nav";
import { BookDetails } from "./components/books/BookDetails";
import { ReaderList } from "./components/readers/ReaderList";
import { ReaderNav } from "./components/nav/ReaderNav";
import { ReaderDetails } from "./components/readers/ReaderDetails";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          //Check if the user is authorized first
          <Authorized>
            {/* ApplicationViews is the CHILD component of Authorized. */}
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );

  // export default App;
};
