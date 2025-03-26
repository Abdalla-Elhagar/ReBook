import { useDispatch, useSelector } from "react-redux";
import { showBookData } from "../slices/dataControl";
import { useNavigate } from "react-router";
import { BooksTypes, UserTypes } from "../pages/signUp/signUp";
import { IoIosRemoveCircle } from "react-icons/io";
import { loginR } from "../slices/logInAnSignUp";

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
  const loginUser: UserTypes = useSelector(
    (state: any) => state.userData.loginUser
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
  function handleRemove(bookId: number) {
    const filterdbooks = loginUser.books.filter(
      (book: BooksTypes) => book.id !== bookId
    );

    const userBooks = { ...loginUser, books: filterdbooks };

    dispatch(loginR(userBooks));
    const usersWithOutLoginUser = users.filter(
      (user: UserTypes) => user.id !== loginUser.id
    );
    usersWithOutLoginUser.push(userBooks);

    localStorage.setItem(
      "garduationProjectUsers",
      JSON.stringify(usersWithOutLoginUser)
    );
  }
  return (
    <div
      key={book.id}
      className={`${
        location.hash == "#/myProfile" && "max-sm:h-40 gap-5"
      } bookCard  max-sm:w-full ${
        location.hash == "#/home" && "min-h-[600px!important]"} `}
    >
      <img
        className={`${
          location.hash == "#/myProfile" &&
          "max-sm:h-full max-sm:w-[100px!important]"
        } `}
        src={book.imageUrl}
        alt="book image"
      />
      <div
        className={`${
          location.hash == "#/myProfile"
        }flex justify-between max-sm:gap-5 w-full p-0 max-sm:flex-col`}
      >
        <div className="text">
          <div className="bookName mb-2">{book.bookName}</div>
          <div className="authorName">{book.author}</div>
        </div>
        <div className="buttons flex justify-end">
          <button
            onClick={() => handleShow(user.id, book.id)}
            className="show w-full"
          >
            Show
          </button>
          {location.hash == "#/myProfile" && (
            <button onClick={() => handleRemove(book.id)}>
              <IoIosRemoveCircle className="text-red-600 text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
