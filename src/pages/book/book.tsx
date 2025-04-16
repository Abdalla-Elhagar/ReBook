import { useSelector } from "react-redux";

export default function BookPage() {
  const bookAndUserData = useSelector(
    (state: any) => state.dataControl.bookData
  );

  console.log(bookAndUserData);
  return (
    <div className="bookPage py-10">
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
              href={`https://wa.me/${bookAndUserData.user.phone}`}
              target="_blank"
            >
              {bookAndUserData.user.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
