import { IoCloseCircleSharp } from "react-icons/io5";
const API = import.meta.env.VITE_API;

export default function RemoveBook({ bookId }: { bookId?: string }) {
  const handleDelete = async () => {
    try {
      const res = await fetch(`${API}/user-books/delete-book`, {
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
  };
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
