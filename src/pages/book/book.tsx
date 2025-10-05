import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function BookPage() {
  const bookAndUserData = useSelector(
    (state: any) => state.dataControl.bookData
  );

  const loginUser1 = localStorage.getItem("loginUser");
  return (
    <div className="bookPage py-10 min-h-screen flex">
      {loginUser1 ? (
        <div className="container max-md:flex-col items-center">
          <img
            src={
              bookAndUserData.book.imageUrl
                ? bookAndUserData.book.imageUrl
                : "asd"
            }
            alt="book image"
            className="bookImg"
          />
          <div className="right max-md:max-w-[100%!important]">
            <div className="bookData">
              <h1 className="bookName">{bookAndUserData.book.bookName}</h1>
              <p className="authorName">{bookAndUserData.book.author}</p>
              <h3 className="category">{bookAndUserData.book.category}</h3>
              <h3 className="case">
                <span className="font-semibold">Case: </span>
                {bookAndUserData.book.case || "New"}
              </h3>
              <div className="description">
                {bookAndUserData.book.description}
              </div>
            </div>

            <div className="bookOwner">
              <h3 className="title">Book Owner</h3>

              <p>{bookAndUserData.user.name}</p>
              <a
                href={`https://mail.google.com/mail/u/0/?fs=1&to=${bookAndUserData.user.email}&su=استفسار&body=&tf=cm`}
                target="_blank"
              >
                {bookAndUserData.user.email}
              </a>
              <a
                href={`https://wa.me/2${bookAndUserData.user.phone}`}
                target="_blank"
              >
                {bookAndUserData.user.phone}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-white text-2xl w-full ">
          You must 
          <Link className="mx-2 border-b" to="/login"> login </Link>
          
           first
        </div>
      )}
    </div>
  );
}
