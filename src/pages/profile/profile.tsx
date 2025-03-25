import userImage from "../../assets/userImage.png";
import { useSelector } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { BooksTypes } from "../signUp/signUp";
import BookCard from "../../components/bookCard";
import EditUserData from "../../components/editUserData";
import AddBook from "../../components/AddBook";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


export default function MyProfile() {
  const logInUser = useSelector((state: any) => state.userData.loginUser);
  const [show, setShow] = useState<boolean>(false);
  const [showEditUser, setShowEditUser] = useState<boolean>(false);
  const [showAddBook, setShowAddBook] = useState<boolean>(false);

  return (
    <div className="myProfile flex relative">
      {show && (
        <div className="windowBackGround fixed w-full h-screen top-0 left-0 bg-black/80 z-50 flex justify-around items-center">
          <div className="window editWindow relative ">
            <button
              onClick={() => {
                setShowEditUser(false);
                setShowAddBook(false);
                setShow(false);
              }}
              className="close absolute top-5 right-5"
            >
              <IoClose className="closeIcon" />
            </button>
            {showEditUser && <EditUserData />}
            {showAddBook && <AddBook />}
          </div>
        </div>
      )}
      <div className="container flex justify-center max-sm:p-[5px!important]">
        <div className="profileData flex flex-col items-center max-sm:w-full">
          <button
            onClick={() => {
              setShowEditUser(true);
              setShow(true);
            }}
            className="edit absolute right-5 top-5"
          >
            <FiEdit className="editIcon text-2xl" />
          </button>

          <div className="image">
            <img src={userImage} alt="user image" />
          </div>
          <h1 className="name max-sm:[font-size:35px!important]">
            {logInUser.name}
          </h1>
          <h3 className="email max-sm:[font-size:20px!important]">
            {logInUser.email}
          </h3>
          <h3 className="phone max-sm:[font-size:20px!important]">
            {logInUser.phone}
          </h3>

          <div className="userBooks w-full px-6">
            <div className="titleAndAddBook flex justify-between px-5">
              <h2 className=" mt-6 text-3xl font-bold">My Books</h2>
              <button
                onClick={() => {
                  setShowAddBook(true);
                  setShow(true);
                }}
                className="addBook"
              >
                <IoAddOutline className="addBookIcone" />
              </button>
            </div>
            <div className="books  flex justify-center items-center flex-col gap-5 py-5">
              {logInUser.books.map((book: BooksTypes) => (
                <BookCard book={book} user={logInUser} />
              ))}
              {logInUser.books.length === 0 && (
                <div className="Error">You diden't add any book</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
