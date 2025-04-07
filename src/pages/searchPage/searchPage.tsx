import { useSelector } from "react-redux";
import { BooksTypes, UserTypes } from "../signUp/signUp";
import BookCard from "../../components/bookCard";

export default function SearchPage() {
  const searchingText = useSelector((state: any) => state.dataControl.search);
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );

  const books: BooksTypes[] = [];
  users.map((user: UserTypes) =>
    user.books.map((book: BooksTypes) => {
      books.push(book);
    })
  );

  return (
    <section className="searchPage">
      <div className="container flex justify-between max-sm:flex-col items-center">
        {users.map((user: UserTypes) =>
          user.books.map((book: BooksTypes) =>
            book.bookName
              .toLowerCase()
              .includes(searchingText.toLowerCase()) ? (
              <BookCard key={book.id} book={book} user={user} />
            ) : (
              <p className=" absolute text-2xl top-full left-1/2 -translate-x-1/2">
                This book is not available
              </p>
            )
          )
        )}
      </div>
    </section>
  );
}
