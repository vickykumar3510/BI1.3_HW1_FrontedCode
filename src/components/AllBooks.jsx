import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
    const [successMsg, setSucessMsg] = useState("")
    const {data, loading} = useFetch("http://localhost:3000/books",)
    console.log(data)
    const handleDelete = async (bookId) => {
        try{
            const response = await fetch(`http://localhost:3000/books/id/${bookId}`,
                {method: "DELETE"},
            );

            if(!response.ok){
                throw "Failed to delete book."
            }

            const data = await response.json()
            if(data){
                setSucessMsg("Book deleted successfully")
                window.location.reload();
            }

        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            {loading && <p>Loading...</p>}
            {data?.error && <p>{data?.error}</p>}
            <ul>
                {data?.map((book) => (
                    <li key={book._id}>{book.title}{" "}
                    <button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMsg}</p>
        </div>
    )

}
export default Books