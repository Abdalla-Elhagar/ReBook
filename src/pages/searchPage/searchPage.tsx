import { useSelector } from "react-redux";
import BookCard from "../../components/bookCard";
import { HiEmojiSad } from "react-icons/hi";
import { useEffect, useState } from "react";
import { BooksTypes } from "../../types/dataTypes";
import { booksData } from "../../api/booksData";
import GoBack from "../../components/common/GoBack";
import { ClipLoader } from "react-spinners";

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const searchingText = useSelector((state: any) => state.dataControl.search);

  const [books, setBooks] = useState<BooksTypes[]>([]);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        setIsLoading(true);
        const BookSRef = await booksData();

        if (!BookSRef) return;

        setBooks(BookSRef);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooksData();
    
  },[]);

  const filterdBooks: BooksTypes[] = books?.filter((book: BooksTypes) =>
    book.bookName.toLowerCase().includes(searchingText.toLowerCase())
  );
  

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-[calc(100vh-70px)] flex justify-center items-center">
          <ClipLoader color="#0e7eff" loading size={50} speedMultiplier={1} />
        </div>
      ) : (
        <section className="searchPage">
          <GoBack />
          <div className="container flex justify-between max-sm:flex-col items-center flex-wrap gap-4">
            {filterdBooks.length > 0 ? (
              filterdBooks.map((book) => (
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
      )}
    </>
  );
}
