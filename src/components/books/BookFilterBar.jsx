export const BookFilter = ({ setShowReaderBooks, showReaderBooks }) => {
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${
          showReaderBooks ? "btn-primary active" : "btn-primary"
        }`}
        onClick={() => {
          setShowReaderBooks(true);
        }}
      >
        My Books
      </button>
      <button
        className={`filter-btn ${
          !showReaderBooks ? "btn-info active" : "btn-info"
        }`}
        onClick={() => {
          setShowReaderBooks(false);
        }}
      >
        All Books
      </button>
    </div>
  );
};
