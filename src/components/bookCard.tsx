import { useDispatch, useSelector } from "react-redux";
import { showBookData } from "../slices/dataControl";
import { useNavigate } from "react-router";
import { BooksTypes, UserTypes } from "../pages/signUp/signUp";

export default function BookCard({
  book,
  user,
}: {
  book: BooksTypes;
  user: UserTypes;
}) {
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleShow(userId: number, bookId: number) {
    const filterdUser = users.filter((user: UserTypes) => user.id === userId);
    const filterdbook = filterdUser[0].books.filter(
      (book: BooksTypes) => book.id === bookId
    );

    dispatch(showBookData({ user: filterdUser[0], book: filterdbook[0] }));
    navigate("/bookPage");
  }
  return (
    <div key={book.id} className="bookCard max-sm:w-full">
      <img src={book.imageUrl} alt="book image" />
      <div className="text">
        <div className="bookName">{book.bookName}</div>
        <div className="authorName">{book.author}</div>
      </div>
      <button onClick={() => handleShow(user.id, book.id)} className="show">
        Show
      </button>
    </div>
  );
}
