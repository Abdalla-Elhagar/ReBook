import { useDispatch, useSelector } from "react-redux";
import { showBookData } from "../slices/dataControl";
import { useNavigate } from "react-router";
import { BooksTypes, UserTypes } from "../pages/signUp/signUp";
import { IoIosRemoveCircle } from "react-icons/io";
import { addUserToUsers, loginR } from "../slices/logInAnSignUp";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    console.log("📌 userId:", userId);
    console.log("📌 bookId:", bookId);

    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser) {
      console.log("❌ User not found");
      return;
    }

    console.log("✅ Found user:", foundUser);

    const foundBook = foundUser.books.find((b) => b.id === bookId);
    if (!foundBook) {
      console.log("❌ Book not found in user.books");
      return;
    }

    console.log("✅ Found book:", foundBook);

    dispatch(showBookData({ user: foundUser, book: foundBook }));
    navigate("/bookPage");
  }
  function handleRemove(bookId: number) {
    const filterdBooks = loginUser.books.filter(
      (book: BooksTypes) => book.id !== bookId
    );

    const userWithOutLoginUser = users.filter(
      (userFromUsers: UserTypes) => userFromUsers.id !== loginUser.id
    );
    const userBooks = { ...loginUser, books: filterdBooks };

    userWithOutLoginUser.push(userBooks);
    dispatch(loginR(userBooks));

    dispatch(addUserToUsers(userWithOutLoginUser));
  }
  return (
    <div
      key={book.id}
      className={`${
        location.hash == "#/myProfile" && "max-sm:h-40 gap-5"
      } bookCard  max-sm:w-full ${
        location.hash !== "#/myProfile" && "min-h-[600px!important]"
      } `}
    >
      <LazyLoadImage
        className={`${
          location.hash == "#/myProfile" &&
          "max-sm:h-full max-sm:w-[100px!important]"
        } `}
        src={book.imageUrl}
        alt="book image"
        effect="blur"
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
          <button aria-label="button"
            onClick={() => handleShow(user.id, book.id)}
            className="show w-full"
          >
            Show
          </button>
          {location.hash == "#/myProfile" && (
            <button aria-label="button" onClick={() => handleRemove(book.id)}>
              <IoIosRemoveCircle className="text-red-600 text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
