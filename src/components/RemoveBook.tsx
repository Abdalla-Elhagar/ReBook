import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { ClipLoader } from "react-spinners";

export default function RemoveBook({ bookId }: { bookId?: string }) {

  const [isLoading,setIsLoading] = useState<boolean>(false)
  const handleDelete = async () => {
    setIsLoading(true)
    try {
      
      const res = await fetch(`https://rebook-backend-0.vercel.app/user-books/delete-book`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") || "null")}`,
        },
        body: JSON.stringify({ _id:bookId }),
      });

      
      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to delete book:", data);
        return;
      }
      location.reload()
    } catch (err) {
      console.log(err);
    }
    finally{
      setIsLoading(false)
    }
  };

  if(isLoading) return<div className=" fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center z-50"><ClipLoader color="#0e7eff" loading size={50} speedMultiplier={1} /></div>
  return (
    <button
      aria-label="delete book"
      onClick={handleDelete}
      className=" absolute -top-2 -right-2"
    >
      <IoCloseCircleSharp className="text-2xl text-red-600" />
    </button>
  );
}
