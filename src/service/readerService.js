export const getAllReaders = () => {
  return fetch(`http://localhost:8088/readers?_embed=booksRead`).then((res) =>
    res.json()
  );
};

export const getReaderById = (readerId) => {
  return fetch(
    `http://localhost:8088/readers/${readerId}?_embed=booksRead`
  ).then((res) => res.json());
};

export const getReaderByEmail = (email) => {
  return fetch(`http://localhost:8088/readers?email=${email}`).then((res) =>
    res.json()
  );
};

export const createReader = (reader) => {
  return fetch("http://localhost:8088/readers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reader),
  }).then((res) => res.json());
};
