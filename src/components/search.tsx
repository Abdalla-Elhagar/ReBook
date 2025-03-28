import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchReducer } from "../slices/dataControl";
import { useNavigate } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


export default function Search() {
  const excludedRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  function handleSearch() {
    dispatch(searchReducer(search));
    navigate("/searchPage");
    setShow(false);
  }

  function handleClick(e: any) {
    if (excludedRef.current && !excludedRef.current.contains(e.target)) {
      setShow(false);
    }
  }
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="search relative max-sm:hidden"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={handleSearch}
        >
          <IoIosSearch className="searchIcon text-xl" />
        </button>
      </form>

      <button className="hidden max-sm:flex " onClick={() => setShow(true)}>
        <IoIosSearch className="searchIcon text-2xl" />
      </button>

      {show && (
        <div
          onClick={handleClick}
          className="fixed top-0 left-0 bg-black/20 flex justify-center h-screen w-screen"
        >
            <button className=" text-white absolute top-2 right-2 " onClick={()=>setShow(false)}>
                <IoMdClose className="text-2xl" />
            </button>
          <form
            onSubmit={(e) => e.preventDefault()}
            ref={excludedRef}
            className="resposiveSearch absolute top-16 w-5/6"
          >
            <input
              className="w-full h-10"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={handleSearch}
            >
              <IoIosSearch className="searchIcon text-xl" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
