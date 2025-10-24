import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { categores } from "./../components/hero/categores/categoryList";
import { InputField } from "../components/common/InputField";
import { SelectField } from "../components/common/SelectField";
import { BooksTypes, UserTypes } from "../types/dataTypes";
import { useSelector } from "react-redux";

const bookstatus = ["New", "As New", "Very Good", "Good"];

export const AddBook = () => {
  const loginUser: UserTypes = useSelector(
    (state: any) => state.userData.logedInUser
  );
  const [error, setError] = useState<boolean>(false);
  const [book, setBook] = useState<BooksTypes>({
    bookName: "",
    author: "",
    description: "",
    imageFile: null,
    category: "Programming",
    status: "New",
    owner: loginUser._id || "",
    addingDate: 0,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBook({ ...book, imageFile: e.target.files[0] });
    }
  };

  async function handleAdd() {
    if (
      book.bookName.length < 3 &&
      book.author.length < 3 &&
      book.description.length < 3 &&
      !book.imageFile
    ) {
      setError(true);
      return;
    }

    const formData = new FormData();

    formData.append("bookName", book.bookName);
    formData.append("author", book.author);
    formData.append("description", book.description);
    formData.append("category", book.category);
    formData.append("status", book.status);
    formData.append("owner", book.owner);

    if (book.imageFile) {
      formData.append("image", book.imageFile);
    }

    const response = await fetch(`https://rebook-backend-0.vercel.app/user-books/addBook`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") || "")}`,
      },
      body: formData,
    });

     const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error adding book");


  }

  return (
    <div className="container mx-auto px-40">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="contentBox mt-20 mx-auto px-40 "
      >
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <InputField
            title="Book Name"
            icon={<FaBook className="icon" />}
            type="text"
            placeholder="Enter book name"
            value={book.bookName}
            onChange={(e: any) =>
              setBook({ ...book, bookName: e.target.value })
            }
            errorMessage={
              error &&
              book.bookName.length < 3 && (
                <p className="ERROR">{book.bookName} is not a book name</p>
              )
            }
          />

          <InputField
            title="Author Name"
            icon={<CiUser className="icon" />}
            type="text"
            placeholder="Enter the author name"
            value={book.author}
            onChange={(e: any) => setBook({ ...book, author: e.target.value })}
            errorMessage={
              error &&
              book.author.length < 3 && (
                <p className="ERROR">{book.author} is not an author name</p>
              )
            }
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <SelectField
            title="Choose Category"
            icon={<TbCategory className="icon" />}
            value={book.category}
            onChange={(e) => setBook({ ...book, category: e.target.value })}
            options={categores}
          />

          <SelectField
            title="Book Status"
            icon={<TbCategory className="icon" />}
            value={book.status}
            onChange={(e) => setBook({ ...book, status: e.target.value })}
            options={bookstatus}
          />
        </div>

        <label htmlFor="description">Description</label>
        <div className="input">
          <textarea
            id="description"
            placeholder="Enter the description"
            required
            value={book.description}
            onChange={(e: any) =>
              setBook({ ...book, description: e.target.value })
            }
            className="w-full h-24 border p-4 rounded-lg"
          />
        </div>
        {error && book.description.length < 3 && (
          <p className="ERROR">{book.author} is not an author name</p>
        )}

        <label>Book Image</label>
        <div className="input file">
          <FaLink className="icon" />
          <input
            type="file"
            accept="umage/*"
            required
            onChange={handleImageChange}
          />
        </div>
        {error && !book.imageFile && <p className="ERROR">Upload an image</p>}

        <div className="editButton">
          <button
            aria-label="button"
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
