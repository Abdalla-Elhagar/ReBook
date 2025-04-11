import { useSelector } from "react-redux";
import { UserTypes, BooksTypes } from "../../pages/signUp/signUp";
import BookCard from "../bookCard";

export default function Hero() {
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );

  return (
    <section className="heroSection">
      <div className="container max-sm:px-[10px!important] max-md:flex-col flex-wrap max-md:items-center">
        {users?.map((user: UserTypes) =>
          [...user.books]
            .reverse()
            .map((book: BooksTypes) => (
              <BookCard key={book.id} book={book} user={user} />
            ))
        )}
      </div>
    </section>
  );
}
