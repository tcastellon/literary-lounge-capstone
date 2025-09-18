import { useState, useEffect } from "react";
import { ReaderViews } from "./ReaderViews";

export const ApplicationViews = () => {
  const [currentReader, setCurrentReader] = useState({});

  useEffect(() => {
    const localLoungeReader = localStorage.getItem("lounge_user");
    const loungeReaderObject = JSON.parse(localLoungeReader);

    setCurrentReader(loungeReaderObject);
  }, []);

  return currentReader?.id ? (
    <ReaderViews currentReader={currentReader} />
  ) : (
    ''
  );
};
