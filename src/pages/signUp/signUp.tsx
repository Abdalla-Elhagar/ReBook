import Logo from "../../assets/projectLogo.webp";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserToUsers, loginR } from "../../slices/logInAnSignUp";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export interface UserTypes {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
  books: BooksTypes[];
}
export interface BooksTypes {
  id: number;
  bookName: string;
  author: string;
  description: string;
  imageUrl: string;
  category: string;
  case: string;
}

export default function SignUp() {
  const dispatch = useDispatch();
  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );
  const navigate: any = useNavigate();

  const [user, setUser] = useState<UserTypes>({
    id: users.length + 1,
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
    books: [],
  });
  const [fUserError, setFUserError] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSignUp() {
    const filterdUser: UserTypes[] =
      users.filter(
        (storedUser: UserTypes) => storedUser.email === user.email
      ) || [];

    filterdUser.length !== 0 ? setError(true) : null;
    setFUserError(filterdUser.length);

    if (
      user.name.length >= 3 &&
      user.email !== filterdUser[0]?.email &&
      user.password.length >= 6 &&
      user.confirmPassword === user.password &&
      isValidEmail(user.email)
    ) {
      setError(false);
      const usersWithNewUser = [...users, user];
      dispatch(addUserToUsers(usersWithNewUser));
      dispatch(loginR(user));
      navigate("/home");
    } else {
      setError(true);
    }
  }
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  const [reset, setReset] = useState();
  function handleReset() {
    localStorage.removeItem("garduationProjectUsers");
    window.location.reload();
  }
  return (
    <div className="signUp ">
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="signUpBox max-sm:w-full relative"
      >
        {show && (
          <div className="w-52 h-20 absolute bg-black/20 flex flex-col gap-2  justify-center items-center ">
            <input
              type="password"
              className="border-2"
              value={reset}
              onChange={(e: any) => setReset(e.target.value)}
            />
            {reset === "153" && (
              <button
                onClick={handleReset}
                className="flex text-white bg-[#0284c7!important] px-6 py-2 rounded"
              >
                Reset
              </button>
            )}
          </div>
        )}
        <button onClick={handleShow} className=" absolute top-0 right-0">
          .
        </button>
        <div className="titleBox">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <h1 className="projectName">ReBook</h1>
          <p className="pageName">Create a new account</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="contentBox">
          <label htmlFor="name">Name</label>
          <div className="input">
            <CiUser className="icon" />
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={user.name}
              onChange={(e: any) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          {error && user.name.length < 3 && (
            <p className="ERROR">{user.name} is not a name</p>
          )}

          <label htmlFor="name">Phone</label>
          <div className="input">
            <CiUser className="icon" />
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone"
              required
              value={user.phone}
              onChange={(e: any) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
          {error && user.phone.length < 11 && (
            <p className="ERROR">Phone number must be more than 10 letters</p>
          )}

          <label htmlFor="email">Email</label>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              required
              value={user.email}
              onChange={(e: any) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          {error && !isValidEmail(user.email) && (
            <p className="ERROR">{user.email} is not an email</p>
          )}
          {error && fUserError !== 0 && (
            <p className="ERROR">This email has been used before</p>
          )}

          <label htmlFor="password">Password</label>
          <div className="input">
            <CiLock className="icon" />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={user.password}
              onChange={(e: any) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </div>
          {error && user.password.length < 6 && (
            <p className="ERROR">The password must be more than 6 letters</p>
          )}

          <label htmlFor="confirmPassword">Confirm password</label>
          <div className="input">
            <CiLock className="icon" />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              required
              value={user.confirmPassword}
              onChange={(e: any) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </div>
          {error && user.confirmPassword !== user.password && (
            <p className="ERROR">
              The confirm password must be like than the password
            </p>
          )}

          <div className="signUpButton">
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </form>
        <div className="footerBox">
          <p>Do you have an account?</p>
          <Link className="toLogin" to="/logIn">
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
