import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../../assets/projectLogo.webp";
import Search from "../search";
import { useDispatch, useSelector } from "react-redux";
import { controlInUserMenuInHeader } from "../../slices/dataControl";
import UserMenuInHeader from "../UserMenuInHeader";

export default function Header() {
  const dispatch = useDispatch()
  const show = useSelector((state:any) => state.dataControl.show)
    
  function handleShow(e:any) {
     e.stopPropagation()
    dispatch(controlInUserMenuInHeader(!show))
  }

  return (
      <header className="header w-full drop-shadow-lg shadow-md"
      >
        <div className="container">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </div>

          <div className="flex justify-end gap-5 items-center w-[280px]">
            <div>
              
            </div>
            <Search />
            {localStorage.getItem("token") ? (
              <button
                onClick={handleShow}
                className="userButton"
              >
                <CiUser className="size-8" />
              </button>
            ) : (
              <div>
                <Link className="text-xl text-[#135E76]" to="login">
                  login
                </Link>
              </div>
            )}
          </div>

          {show && <UserMenuInHeader />}
        </div>
      </header>
  );
}
