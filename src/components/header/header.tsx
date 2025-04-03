import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";
import Logo from "../../assets/projectLogo.png";
import Search from "../search";
import { motion,MotionConfig } from "motion/react";


export default function Header() {
  const loginUser = useSelector((state: any) => state.userData.loginUser);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  function handleShow() {
    setShow(!show);
  }
  function handleLogOut() {
    localStorage.removeItem("loginUser");
    navigate("/logIn");
  }
  return (
    <MotionConfig>
    <motion.header
      transition={{ duration: 1 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header w-full drop-shadow-lg shadow-md"
    >
      <div className="container">
        <motion.div transition={{duration:0.6,delay:0.6}} initial={{y: -70}} animate={{y:0}}>
          <Link to="/home">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </motion.div>

        <motion.div className="flex justify-end gap-5 items-center w-[280px]">
          <Search />
          <motion.button transition={{duration:0.6,delay:1.6}} initial={{y: -70}} animate={{y:0}} onClick={handleShow} className="userButton">
            <CiUser className="size-8" />
          </motion.button>
        </motion.div>

        {show && (
          <motion.div transition={{duration:0.3}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="userList z-50">
            <div className="item">
              <div className="name">{loginUser.name}</div>
              <div className="email">{loginUser.email}</div>
            </div>
            <Link
              onClick={() => setShow(false)}
              to="/myProfile"
              className="item account z-50"
            >
              My Profile
            </Link>
            <button
              className="item logOut"
              onClick={() => {
                setShow(false);
                handleLogOut();
              }}
            >
              <CiLogout className="logOutIcon" />
              <p className="text">Log Out</p>
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
    </MotionConfig>
  );
}
