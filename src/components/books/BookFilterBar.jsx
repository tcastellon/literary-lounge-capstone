
export const BookFilter = ({setShowReaderBooks}) => {
  return (
    <div>
      <button
        onClick={() => {
          setShowReaderBooks(true);
        }}
      >
        My Books
      </button>
      <button
        onClick={() => {
          setShowReaderBooks(false);
        }}
      >
        All Books
      </button>
    </div>
  );
};
