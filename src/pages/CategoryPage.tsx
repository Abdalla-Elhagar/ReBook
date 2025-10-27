import { useSelector } from "react-redux";
import BookCard from "../components/bookCard";
import { useEffect, useState } from "react";
import { booksData } from "../api/booksData";
import { BooksTypes } from "../types/dataTypes";
import GoBack from "../components/common/GoBack";

export default function CategoryPage() {
  const [books, setBooks] = useState<BooksTypes[]>([]);

  useEffect(() => {
    const fetchBooksData = async () => {
      const booksRes = await booksData();

      if (booksRes) setBooks(booksRes);
    };

    fetchBooksData();
  }, []);

  const categoryName = useSelector(
    (state: any) => state.dataControl.categoryName
  );

  return (
    <section className="postes">
      <GoBack />
      <p className="px-[80px] mb-4 max-sm:px-[10px!important] font-semibold md:text-4xl text-2xl">
        {categoryName} Books
      </p>
      <div className="container max-sm:px-[10px!important] max-md:flex-col flex-wrap max-md:items-center">
        {books
          .reverse()
          .filter((book: BooksTypes) => categoryName == book.category)
          .map((book: BooksTypes) => (
            <BookCard book={book} />
          ))}
      </div>
    </section>
  );
}
