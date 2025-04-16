import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { BooksTypes, UserTypes } from "../pages/signUp/signUp";
import { CiUser } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addUserToUsers, loginR } from "../slices/logInAnSignUp";
import { closeAndShowAddBooksWindows } from "../slices/dataControl";
import { TbCategory } from "react-icons/tb";
import { categores } from "./hero/categores/categoryList";

export default function AddBook() {
  const logInUser = useSelector((state: any) => state.userData.loginUser);
  const users = useSelector((state: any) => state.userData.arrOfUsers);
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);
  const [book, setBook] = useState<BooksTypes>({
    id: Math.floor(Math.random() * 100000000),
    bookName: "",
    author: "",
    description: "",
    imageUrl: "",
    category: "",
  });

  function handleAdd() {
    if (
      book.bookName.length >= 3 &&
      book.author.length >= 3 &&
      book.description.length >= 3 &&
      book.imageUrl.length >= 3
    ) {
      setError(false);

      const userWithOutLoginUser = users.filter(
        (userFromUsers: UserTypes) => userFromUsers.id !== logInUser.id
      );

      const newLoginUserArray = {
        ...logInUser,
        books: [...(logInUser.books || []), book],
      };
      console.log(newLoginUserArray);
      userWithOutLoginUser.push(newLoginUserArray);

      dispatch(addUserToUsers(userWithOutLoginUser));
      dispatch(loginR(newLoginUserArray));
      dispatch(closeAndShowAddBooksWindows(false));
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="contentBox mt-10">
      <label htmlFor="bookName">Book Name</label>
      <div className="input">
        <FaBook className="icon" />
        <input
          type="text"
          id="bookName"
          placeholder="Enter book name"
          required
          value={book.bookName}
          onChange={(e: any) => setBook({ ...book, bookName: e.target.value })}
        />
      </div>
      {error && book.bookName.length < 3 && (
        <p className="ERROR">{book.bookName} is not a book name</p>
      )}

      <label htmlFor="author">Author Name</label>
      <div className="input">
        <CiUser className="icon" />
        <input
          type="text"
          id="author"
          placeholder="Enter the author name"
          required
          value={book.author}
          onChange={(e: any) => setBook({ ...book, author: e.target.value })}
        />
      </div>
      {error && book.author.length < 3 && (
        <p className="ERROR">{book.author} is not an author name</p>
      )}
      <label htmlFor="">Choose Category</label>
      <div className="input">
        <TbCategory className="icon" />

        <select
          className="h-10 w-full pl-10 border  focus:outline-none rounded-lg"
          value={book.category}
          onChange={(e) => setBook({ ...book, category: e.target.value })}
        >
          {categores.map((category: string) => (
            <option>{category}</option>
          ))}
        </select>
      </div>
      <label htmlFor="description">Description</label>
      <div className="input">
        <MdOutlineDescription className="icon" />
        <input
          type="text"
          id="description"
          placeholder="Enter the book description"
          required
          value={book.description}
          onChange={(e: any) =>
            setBook({ ...book, description: e.target.value })
          }
        />
      </div>
      {error && book.description.length < 3 && (
        <p className="ERROR">{book.author} is not an author name</p>
      )}
      <label htmlFor="imageUrl">Book Photo</label>
      <div className="input">
        <FaLink className="icon" />
        <input
          type="text"
          id="imageUrl"
          placeholder="Enter the book image url"
          required
          value={book.imageUrl}
          onChange={(e: any) => setBook({ ...book, imageUrl: e.target.value })}
        />
      </div>
      {error && book.imageUrl.length < 3 && (
        <p className="ERROR">{book.imageUrl} is not a url</p>
      )}
      <div className="editButton">
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
