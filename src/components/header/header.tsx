import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../../assets/projectLogo.webp";
import Search from "../search";
import { motion, MotionConfig } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { controlInUserMenuInHeader } from "../../slices/dataControl";
import UserMenuInHeader from "../UserMenuInHeader";

export default function Header() {
  const dispatch = useDispatch()
  const show = useSelector((state:any) => state.dataControl.show)
    
  function handleShow() {
    dispatch(controlInUserMenuInHeader(!show))
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
          <motion.div
            transition={{ duration: 0.6, delay: 0.6 }}
            initial={{ y: -70 }}
            animate={{ y: 0 }}
          >
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </motion.div>

          <motion.div className="flex justify-end gap-5 items-center w-[280px]">
            <motion.div
              transition={{ duration: 0.6, delay: 1.1 }}
              initial={{ y: -70 }}
              animate={{ y: 0 }}
            >
              
            </motion.div>
            <Search />
            {localStorage.getItem("token") ? (
              <motion.button
                transition={{ duration: 0.6, delay: 1.6 }}
                initial={{ y: -70 }}
                animate={{ y: 0 }}
                onClick={handleShow}
                className="userButton"
              >
                <CiUser className="size-8" />
              </motion.button>
            ) : (
              <motion.div
                transition={{ duration: 0.6, delay: 1.6 }}
                initial={{ y: -70 }}
                animate={{ y: 0 }}
              >
                <Link className="text-xl text-[#135E76]" to="login">
                  login
                </Link>
              </motion.div>
            )}
          </motion.div>

          {show && <UserMenuInHeader />}
        </div>
      </motion.header>
    </MotionConfig>
  );
}
