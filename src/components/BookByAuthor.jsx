import useFetch from "../useFetch";

const BookByTitle = ({author}) => {
    const {data, loading, error} = useFetch(`https://bi-1-3-hw-1-backend-alpha.vercel.app/books/author/${author}`)

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