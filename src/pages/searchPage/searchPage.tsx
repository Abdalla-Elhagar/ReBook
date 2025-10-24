import { useSelector } from "react-redux";
import BookCard from "../../components/bookCard";
import { HiEmojiSad } from "react-icons/hi";
import { useEffect, useState } from "react";
import { BooksTypes } from "../../types/dataTypes";
import { booksData } from "../../api/booksData";

export default function SearchPage() {
  const searchingText = useSelector((state: any) => state.dataControl.search);

  const [ books, setBooks ] = useState<BooksTypes[]>([])

  useEffect(()=> {
    const fetchBooksData = async() => {
      const BookSRef = await booksData()

      if(!BookSRef) return

      setBooks(BookSRef)
    }
    fetchBooksData()
  })

  books?.forEach((book:BooksTypes) => {
      if (book.bookName.toLowerCase().includes(searchingText.toLowerCase())) {
        
      }
    });

  return (
    <section className="searchPage">
      <div className="container flex justify-between max-sm:flex-col items-center flex-wrap gap-4">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        ) : (
          <p className="text-2xl max-sm:text-sm text-center mt-10">
            This book is not available{" "}
            <HiEmojiSad className="inline text-amber-300 bg-black size-4 rounded-full" />
          </p>
        )}
      </div>
    </section>
  );
}
