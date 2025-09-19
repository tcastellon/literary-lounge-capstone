import { useEffect, useState } from "react";
import { getAllReaders } from "../../service/readerService";
import { Reader } from "./ReaderDetails";
import { Link } from "react-router-dom";

export const ReaderList = () => {
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    getAllReaders().then(readersArray => {
      setReaders(readersArray);
    });
  }, []);

  return (
    <div>
      {readers.map((readerObj) => {
        return (
          <Link to={`/readerlist/${readerObj.id}`} key={readerObj.id}>
            <Reader reader={readerObj} key={readerObj} />
          </Link>
        );
      })}
    </div>
  );
};
