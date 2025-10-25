import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { usersData } from "../../api/usersData";
import { UserTypes } from "../../types/dataTypes";

export default function BookPage() {
  const bookData = useSelector(
    (state: any) => state.dataControl.bookData
  );

  const [users, setUsers] = useState<UserTypes[]>([])
    useEffect(()=> {
      const fetchUsersData= async ()=>{
        const usersRef = await usersData()
  
        if (usersRef) setUsers(usersRef)
      }
    fetchUsersData()
    },[])
  

    const bookUser = users.find((user: UserTypes)=> user._id === bookData.owner)
    
    if (!bookUser) return null
  return (
    <div className="bookPage py-0 md:pt-[100px] md:py-10 min-h-screen flex">
      {localStorage.getItem("token") ? (
        <div className="container max-lg:flex-col lg:justify-center md:w-1/2 w-full text-center lg:text-start items-center rounded-none md:rounded-xl">
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
