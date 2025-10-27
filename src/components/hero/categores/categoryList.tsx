import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendCategoryName } from "../../../slices/dataControl";

export const categores = [
  "Programming",
  "Stories",
  "Medical",
  "Educational",
  "Scientific",
];

export default function CategoryList() {
  const dispatch = useDispatch();
  function handleCategory(categoryName: string) {
    dispatch(sendCategoryName(categoryName));
  }

  return (
    <>
    <h2 className="text-xl font-bold hidden md:block">categores</h2>
      <ul className="w-full max-md:hidden ml-3 mt-5 flex flex-col gap-5">
        
        {categores.map((category: string, index: number) => (
          <li key={index} className="categoryItem">
            <Link
              className=" transition-all duration-300 hover:ml-3 block"
              onClick={() => handleCategory(category)}
              to={"/categoryPage"}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
