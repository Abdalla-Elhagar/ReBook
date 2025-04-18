import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { sendCategoryName } from "../../../slices/dataControl";

export const categores = [
  { id: "0", title: "Programming" },
  { id: "1", title: "Stories" },
  { id: "2", title: "Medical" },
  { id: "3", title: "Educational" },
  { id: "4", title: "Scientific" },
];

export default function CategoryList() {
  const show2 = useSelector((state: any) => state.dataControl.show2);
  const dispatch = useDispatch();
  function handleCategory(categoryName: string) {
    dispatch(sendCategoryName(categoryName));
  }

  return (
    <>
      <ul className="w-full max-md:hidden ml-3 mt-5 flex flex-col gap-5">
        <h2 className="text-xl font-bold">categores</h2>
        {categores.map((category: { id: string; title: string }) => (
          <li key={category.id} className="categoryItem">
            <Link
              className=" transition-all duration-300 hover:ml-3 block"
              onClick={() => handleCategory(category.title)}
              to={"/categoryPage"}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
      {show2 && (
        <ul className="w-full ml-3 mt-5 max-md:flex hidden flex-col gap-5">
          <h2 className="text-xl font-bold mt-12">categores</h2>
          {categores.map((category: { id: string; title: string }) => (
            <li key={category.id} className="categoryItem">
              <Link
                className=" transition-all duration-300 hover:ml-3 block"
                onClick={() => handleCategory(category.title)}
                to={"/categoryPage"}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
