import Logo from "../../assets/projectLogo.webp";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router";
import { MdErrorOutline } from "react-icons/md";
import { useState } from "react";
import { UserTypes } from "../signUp/signUp";
import { useSelector, useDispatch } from "react-redux";
import { loginR } from "../../slices/logInAnSignUp";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function Login() {
  const navigate: any = useNavigate();

  const dispatch = useDispatch();
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );
  const [user, setUser] = useState<UserTypes>({
    id: users.length + 1,
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
    books: [],
  });
  const [error, setError] = useState<boolean>(false);

  function handleLogin() {
    const selectedUser: UserTypes | undefined = users.find(
      (U: UserTypes) => U.email === user.email && U.password === user.password
    );

    if (selectedUser) {
      dispatch(loginR(selectedUser));
      setError(false);
      navigate("/home");
    } else {
      setError(true);
      console.log(users);
      console.log(selectedUser);
    }
  }
  return (
    <div className="login">
      <motion.div
        className="loginBox"
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="titleBox">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <h1 className="projectName">ReBook</h1>
          <p className="pageName">Login to your Account</p>
        </div>
        {error && (
          <div className="errorMessage">
            <MdErrorOutline className="errorIcon" />
            <p className="errortext">
              There is an error in the email or password
            </p>
          </div>
        )}
        <form onSubmit={(e) => e.preventDefault()} className="contentBox">
          <label htmlFor="email">Email</label>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={user?.email}
              onChange={(e: any) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="input">
            <CiLock className="icon" />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user?.password}
              onChange={(e: any) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </div>
          <div className="loginButton">
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
        <div className="footerBox">
          <p>Do you have an account?</p>
          <Link className="toSignUp" to="/signUp">
            Create an account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
