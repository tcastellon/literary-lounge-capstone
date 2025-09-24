import { useEffect, useState } from "react";
import { getAllReaders } from "../../service/readerService";
import { Reader } from "./ReaderDetails";
import { Link } from "react-router-dom";
import "./Reader.css"

export const ReaderList = () => {
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    getAllReaders().then(readersArray => {
      setReaders(readersArray);
    });
  }, []);

  return (
    <div className="readers-container">
      <h1>Readers</h1>
      <div className="readers-list">
      {readers.map((readerObj) => {
        return (
          <Link to={`/readerlist/${readerObj.id}`} key={readerObj.id} className="reader-card">
            <Reader reader={readerObj} />
          </Link>
        );
      })}
      </div>
    </div>
  );
};
