import useFetch from "../useFetch";

const BookByTitle = ({author}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/books/author/${author}`)

   return data? (
    <>
      <h1>Books by {author}</h1>
      <ul>
        {data.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </>
  ) : (
    <>
      {loading && <p>Loading ....</p>}
      {error && <p>Error while fetching the data.</p>}
    </>
  );
};
export default BookByTitle