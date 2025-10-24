import { BooksTypes } from "../types/dataTypes";
import BookCard from "./bookCard";
import { booksData } from "../api/booksData";
import { useEffect, useState } from "react";

export default function Postes() {
  const [ books, setBooks] = useState([])

  useEffect(()=> {
    const fetchBooksData = async ()=> {
       const booksRes =await booksData()

      if(booksRes) setBooks(booksRes)
    }

    fetchBooksData()
  },[])

  return (
    <section className="postes">
      <div className="container max-sm:px-[10px!important] max-md:flex-col flex-wrap max-md:items-center">
        {
            books
              .reverse()
              .map((book: BooksTypes) => (
                <BookCard key={book._id} book={book} />
              ))
          }
      </div>
    </section>
  );
}
