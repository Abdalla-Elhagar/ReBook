import { useDispatch } from "react-redux";
import { showBookData } from "../slices/dataControl";
import { useNavigate } from "react-router-dom";
import { usersData } from "../api/usersData";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { BooksTypes, UserTypes } from "../types/dataTypes";
import RemoveBook from "./RemoveBook";

export default function BookCard({book}: {book: BooksTypes}) {

  const [users, setUsers] = useState([])
  useEffect(()=> {
    const fetchUsersData= async ()=>{
      const usersRef = await usersData()

      if (usersRef) setUsers(usersRef)
    }
  fetchUsersData()
  },[])



  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleShow() {
    const foundUser = users.find((u:UserTypes) => u._id === book.owner);
    if (!foundUser) {
      console.log("User not found");
      return;
    }

    


    dispatch(showBookData(book));
    navigate("/bookPage");
  }
  
  return (
    <div
      key={book._id}
      className={`relative ${
        location.hash == "#/myProfile" && "h-20 gap-5"
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
          location.hash == "#/myProfile" && "flex justify-between items-center w-full "
        }`}
      >
        <div className="text">
          <div className="bookName mb-2">{book.bookName}</div>
          <div className="authorName">{book.author}</div>
        </div>
        <div className="buttons flex justify-end">
          <button aria-label="button"
            onClick={() => handleShow()}
            className={`show  ${ location.hash !== "#/myProfile" && "w-[100%!important]" }`}
          >
            Show
          </button>

        {
          location.hash === "#/myProfile" && <RemoveBook bookId={book._id} />
        }
          
        </div>
      </div>
    </div>
  );
}
