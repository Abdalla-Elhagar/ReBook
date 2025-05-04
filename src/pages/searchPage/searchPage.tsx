import { useSelector } from "react-redux";
import { BooksTypes, UserTypes } from "../signUp/signUp";
import BookCard from "../../components/bookCard";
import { HiEmojiSad } from "react-icons/hi";

export default function SearchPage() {
  const searchingText = useSelector((state: any) => state.dataControl.search);
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );

  const books: { book: BooksTypes; user: UserTypes }[] = [];

  users.forEach((user) => {
    user.books.forEach((book) => {
      if (book.bookName.toLowerCase().includes(searchingText.toLowerCase())) {
        books.push({ book, user });
      }
    });
  });

  return (
    <section className="searchPage">
      <div className="container flex justify-between max-sm:flex-col items-center flex-wrap gap-4">
        {books.length > 0 ? (
          books.map(({ book, user }) => (
            <BookCard key={book.id} book={book} user={user} />
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
