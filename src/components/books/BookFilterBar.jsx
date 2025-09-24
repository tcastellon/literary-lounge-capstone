
export const BookFilter = ({setShowReaderBooks}) => {
  return (
    <div className="filter-bar">
      <button
      className="filter-btn btn-primary"
        onClick={() => {
          setShowReaderBooks(true);
        }}
      >
        My Books
      </button>
      <button
      className="filter-btn btn-info"
        onClick={() => {
          setShowReaderBooks(false);
        }}
      >
        All Books
      </button>
    </div>
  );
};
