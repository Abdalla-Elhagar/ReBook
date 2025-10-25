import userImage from "../../assets/userImage.webp";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import BookCard from "../../components/bookCard";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { closeAndShowEditWindows } from "../../slices/dataControl";
import { BooksTypes, UserTypes } from "../../types/dataTypes";
import { useEffect, useState } from "react";
import { booksData } from "../../api/booksData";
import EditUserDataWindow from "../../components/EditUserDataWindow";

export default function MyProfile() {

  const [ books, setBooks] = useState([])
    const showEdit = useSelector((state:any) => state.dataControl.showEdit)
  
    useEffect(()=> {
      const fetchBooksData = async ()=> {
         const booksRes =await booksData()
  
        if(booksRes) setBooks(booksRes)
      }
  
      fetchBooksData()
    },[])

  const dispatch = useDispatch();
  const logInUser: UserTypes = useSelector((state: any) => state.userData.logedInUser);
  const userBooks = books.filter((book:BooksTypes) => book.owner === logInUser._id)

  return (
    <AnimatePresence>
      <div className="myProfile flex relative">
        { showEdit && <EditUserDataWindow /> }
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
              className="edit absolute right-5 top-5 transition-all duration-100 focus:scale-90"
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
                <h2 className="text-3xl font-bold">User Books</h2>
                
              </div>
              <div className="books flex justify-center items-center flex-col gap-5 py-5">
                {userBooks.reverse().map((book: BooksTypes) => (
                  <BookCard key={book._id} book={book} />
                ))}
                {userBooks.length === 0 && (
                  <div className="Error">You diden't add any book</div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    
    </AnimatePresence>
  );
}
