import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BooksTypes } from "../../types/dataTypes";

export default function BookPage() {
  const bookData:BooksTypes = useSelector(
    (state: any) => state.dataControl.bookData
  );

 const bookUser = bookData.ownerData;

    
    
    if (!bookUser) return <div>Loading...</div>
  return (
    <div className="bookPage py-0 lg:pt-[100px] lg:py-10 min-h-screen flex">
      {localStorage.getItem("token") ? (
        <div className="container max-lg:flex-col lg:justify-center lg:min-w-[800px] lg:w-1/2 md:w-3/5 w-11/12 text-center lg:text-start items-center rounded-none md:rounded-xl">
          <img
            src={
              bookData.imageUrl
                ? bookData.imageUrl
                : ""
            }
            alt="book image"
            className="bookImg lg:w-1/2 w-full"
          />
          <div className="right max-md:max-w-[100%!important]">
            <div className="bookData">
              <h1 className="bookName">{bookData.bookName}</h1>
              <p className="authorName">{bookData.author}</p>
              <h3 className="category font-semibold">{bookData.category}</h3>
              <h3 className="status font-semibold">{bookData.status || "New"}</h3>
              <div className="description whitespace-pre-wrap">
                {bookData.description}
              </div>
            </div>

            <div className="bookOwner">
              <h3 className="title">Book Owner</h3>

              <p>{bookUser.name}</p>
              <a
                href={`https://mail.google.com/mail/u/0/?fs=1&to=${bookUser.email}&su=استفسار&body=&tf=cm`}
                target="_blank"
              >
                {bookUser.email}
              </a>
              <a
                href={`https://wa.me/2${bookUser.phone}`}
                target="_blank"
              >
                {bookUser.phone}
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
