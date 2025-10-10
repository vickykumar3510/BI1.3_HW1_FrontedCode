import './App.css'
import AllBooks from './components/AllBooks'
import BookByTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByAuthor'
import AddBookForm from "./components/AddBookForm"

export default function App(){
  return (
    <main>
    <AddBookForm />
    <h1>All Books</h1>
    <AllBooks />
    <BookByTitle title="Shoe Dog"/>
    <BookByAuthor author="Harper Lee"/>
    </main>
  )
}