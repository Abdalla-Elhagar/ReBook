import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { controlInUserMenuInHeader } from "../slices/dataControl";

const UserMenuInHeader = () => {
  const loginUser = useSelector((state: any) => state.userData.logedInUser);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
    location.reload();
  }

  const handleControlInUserMenuInHeader = () => {
    dispatch(controlInUserMenuInHeader(false));
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="userList z-50"
    >
      <div className="item">
        <div className="name">{loginUser?.name}</div>
        <div className="email">{loginUser?.email}</div>
      </div>
      <Link
        onClick={() => handleControlInUserMenuInHeader()}
        to="/myProfile"
        className="item account z-50"
      >
        My Profile
      </Link>

      <Link
        onClick={() => handleControlInUserMenuInHeader()}
        to="/addBook"
        className="item account z-50"
      >
        Add Book
      </Link>

      <button
        aria-label="button"
        className="item logOut"
        onClick={() => {
          handleControlInUserMenuInHeader();
          handleLogOut();
        }}
      >
        <CiLogout className="logOutIcon" />
        <p className="text">Log Out</p>
      </button>
    </motion.div>
  );
};

export default UserMenuInHeader;
