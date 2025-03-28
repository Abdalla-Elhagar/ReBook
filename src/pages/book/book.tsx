import { useSelector } from "react-redux";


export default function BookPage() {
  const bookAndUserData = useSelector(
    (state: any) => state.dataControl.bookData
  );
  return (
    <div className="bookPage py-10">
      <div className="container max-md:flex-col items-center">
        <img
          src={bookAndUserData.book.imageUrl}
          alt="book image"
          className="bookImg"
        />
        <div className="right max-md:max-w-[100%!important]">
          <div className="bookData">
            <h1 className="bookName">{bookAndUserData.book.bookName}</h1>
            <p className="authorName">{bookAndUserData.book.author}</p>
            <div className="description">
              {bookAndUserData.book.description}
            </div>
          </div>

          <div className="bookOwner">
            <h3 className="title">Book Owner</h3>
            <p>{bookAndUserData.user.name}</p>
            <p>{bookAndUserData.user.email}</p>
            <p>{bookAndUserData.user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
