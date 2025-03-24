import userImage from "../../assets/userImage.png";
import { useSelector } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { BooksTypes } from "../signUp/signUp";
import BookCard from "../../components/bookCard";

export default function MyProfile() {
  const logInUser = useSelector((state: any) => state.userData.loginUser);
  return (
    <div className="myProfile flex">
      <div className="container flex justify-center">
        <div className="profileData flex flex-col items-center">
        <button className="edit absolute right-5 top-5"><FiEdit className="editIcon text-2xl" /></button>

          <div className="image">
            <img src={userImage} alt="user image" />
          </div>
          <h1 className="name">{logInUser.name}</h1>
          <h3 className="email">{logInUser.email}</h3>
          <h3 className="phone">{logInUser.phone}</h3>

          <div className="userBooks w-full px-6">
            <div className="titleAndAddBook flex justify-between px-5">
              <h2 className=" mt-6 text-3xl font-bold">My Books</h2>
              <button className="addBook">
                <IoAddOutline className="addBookIcone" />
              </button>
            </div>
            <div className="books  flex justify-center items-center flex-col gap-5 py-5">
            {logInUser.books.map((book:BooksTypes) => (
                <BookCard book={book} user={logInUser} />
            ))}
            {logInUser.books.length === 0 && <div className="Error">You diden't add any book</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
