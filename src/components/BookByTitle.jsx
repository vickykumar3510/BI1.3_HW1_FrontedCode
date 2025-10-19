import useFetch from "../useFetch";

const BookByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://bi-1-3-hw-1-fronted-code.vercel.app/books/title/${title}`)

   return data && data.length > 0 ? (
    <div>
      {data.map((book) => (
        <div key={book._id}>
          <h1>{book.title}</h1>
          <p><strong>Author: </strong>{book.author}</p>
          <p><strong>Release Year: </strong>{book.publishedYear}</p>
          <p><strong>Genre: </strong>{book.genre.join(", ")}</p>
        </div>
      ))}
    </div>
  ) : (
    <>
      {loading && <p>Loading ....</p>}
      {error && <p>Error while fetching the data.</p>}
    </>
  );
};
export default BookByTitle