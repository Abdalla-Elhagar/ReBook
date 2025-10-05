import userImage from "../../assets/userImage.webp";
import { useDispatch, useSelector } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { BooksTypes } from "../signUp/signUp";
import BookCard from "../../components/bookCard";
import EditUserData from "../../components/editUserData";
import AddBook from "../../components/AddBook";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import {
  closeAndShowAddBooksWindows,
  closeAndShowEditWindows,
} from "../../slices/dataControl";

export default function MyProfile() {
  const dispatch = useDispatch();
  const logInUser = useSelector((state: any) => state.userData.loginUser);
  const userBooks = [...logInUser.books].reverse();
  const showEdit = useSelector((state: any) => state.dataControl.showEdit);
  const showAddBooks = useSelector(
    (state: any) => state.dataControl.showAddBooks
  );


  const loginUser1 = localStorage.getItem("loginUser");
 

  return (
    
    <AnimatePresence>
      { loginUser1 ?
      <div className="myProfile flex relative">
        {(showEdit || showAddBooks) && (
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="windowBackGround fixed w-full h-screen top-0 left-0 bg-black/80 z-50 flex justify-around items-center"
          >
            <div className="window editWindow relative ">
              <button aria-label="button"
                onClick={() => {
                  dispatch(closeAndShowEditWindows(false));
                  dispatch(closeAndShowAddBooksWindows(false));
                }}
                className="close absolute top-5 right-5"
              >
                <IoClose className="closeIcon" />
              </button>
              {showEdit && <EditUserData />}
              {showAddBooks && <AddBook />}
            </div>
          </motion.div>
        )}
        <div className="container flex justify-center max-sm:p-[5px!important]">
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="profileData flex flex-col items-center max-sm:w-full"
          >
            <button aria-label="button"
              onClick={() => {
                dispatch(closeAndShowEditWindows(true));
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

            <div className="userBooks w-full px-6 mt-10">
              <div className="titleAndAddBook flex justify-between items-center px-5">
                <h2 className="text-3xl font-bold">My Books</h2>
                <button aria-label="button"
                  onClick={() => {
                    dispatch(closeAndShowAddBooksWindows(true));
                  }}
                  className="addBook"
                >
                  <IoAddOutline className="addBookIcone" />
                </button>
              </div>
              <div className="books flex justify-center items-center flex-col gap-5 py-5">
                {userBooks.map((book: BooksTypes) => (
                  <BookCard book={book} user={logInUser} />
                ))}
                {logInUser.books.length === 0 && (
                  <div className="Error">You diden't add any book</div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      : <div className="flex justify-center items-center">You must login first</div>
    }
    </AnimatePresence>
  );
}
