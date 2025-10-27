import { useDispatch } from "react-redux";
import { showBookData } from "../slices/dataControl";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BooksTypes, UserTypes } from "../types/dataTypes";
import RemoveBook from "./RemoveBook";
import { usersData } from "../api/usersData";
import { useQuery } from "@tanstack/react-query";

export default function BookCard({ book }: { book: BooksTypes }) {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: usersData,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleShow() {
    if (isLoading) return;
    const foundUser = users.find((u: UserTypes) => u._id === book.owner);
    if (!foundUser) {
      console.log("User not found");
      return;
    }

    dispatch(showBookData({ ...book, ownerData: foundUser }));
    navigate("/bookPage");
  }

  return (
    <button
      aria-label="show book data"
      onClick={() => handleShow()}
      disabled={isLoading}
      key={book._id}
      className={`relative ${
        location.hash == "#/myProfile" && "h-20 gap-5"
      } bookCard  max-sm:w-full ${
        location.hash !== "#/myProfile" && "min-h-[600px!important]"
      } transition-all duration-100 focus:scale-90`}
    >
      <LazyLoadImage
        className={`${location.hash == "#/myProfile" ? "h-full" : ""} `}
        src={book.imageUrl}
        alt="book image"
        effect="blur"
      />
      <div
        className={`${
          location.hash == "#/myProfile" &&
          "flex justify-between items-center w-full "
        }`}
      >
        <div className="text">
          <div className="bookName mb-2">{book.bookName}</div>
          <div className="authorName">{book.author}</div>
        </div>
        <div onClick={(e) => e.stopPropagation()} className="buttons flex justify-end ">
          {location.hash === "#/myProfile" && <RemoveBook bookId={book._id} />}
        </div>
      </div>
    </button>
  );
}
