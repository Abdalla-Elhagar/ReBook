import { useSelector } from "react-redux";
import { UserTypes, BooksTypes } from "../pages/signUp/signUp";
import BookCard from "../components/bookCard";

export default function CategoryPage() {
  const categoryName = useSelector(
    (state: any) => state.dataControl.categoryName
  );
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );
  return (
    <section className="postes">
      <div className="container max-sm:px-[10px!important] max-md:flex-col flex-wrap max-md:items-center">
        {[...users].reverse().map((user: UserTypes) =>
          [...user.books]
            .reverse()
            .filter((book: BooksTypes) => categoryName == book.category)
            .map((book: BooksTypes) => (
              <BookCard key={book.id} book={book} user={user} />
            ))
        )}
      </div>
    </section>
  );
}
