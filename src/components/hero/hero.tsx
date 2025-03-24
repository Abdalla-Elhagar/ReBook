import { useSelector } from "react-redux";
import { UserTypes, BooksTypes } from "../../pages/signUp/signUp";
import BookCard from "../bookCard";

export default function Hero() {
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );

  return (
    <section className="heroSection">
      <div className="container max-md:flex-col max-md:items-center">
        {users?.map((user: UserTypes) =>
          user.books?.map((book: BooksTypes) => (
            <BookCard book={book} user={user} />
          ))
        )}
      </div>
    </section>
  );
}
