import Logo from "../../assets/projectLogo.webp";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { UserTypes } from "../../types/dataTypes";
import { InputField } from "../../components/common/InputField";
import { login } from "../../slices/logInAndSignUp";
import { MdOutlineLocalPhone } from "react-icons/md";


export default function SignUp() {
  const dispatch = useDispatch();

  const [usedEmail, setUsedEmail] = useState<boolean>(false);

  const navigate: any = useNavigate();

  const [user, setUser] = useState<UserTypes>({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<boolean>(false);
  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSignUp() {
    if (
      user.name.length < 3 ||
      user.password.length < 6 ||
      user.confirmPassword !== user.password ||
      !isValidEmail(user.email)
    ) {
      setError(true);
      return;
    }
    setError(false);

    const res = await fetch(`https://rebook-backend-0.vercel.app/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      setUsedEmail(true);
      return;
    }
    setUsedEmail(false);
    const data = await res.json();

    dispatch(login({ token: data, email: user.email }));

    navigate("/");

    location.reload()
  }

  return (
    <div className="signUp ">
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="signUpBox max-sm:w-full relative"
      >
        <div className="titleBox">
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <h1 className="projectName">ReBook</h1>
          <p className="pageName">Create a new account</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="contentBox">
          <InputField
            title="Name"
            icon={<CiUser className="icon" />}
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e: any) => setUser({ ...user, name: e.target.value })}
            errorMessage={
              error &&
              user.name.length < 3 && (
                <p className="ERROR">{user.name} is not a name</p>
              )
            }
          />

          <InputField
            title="Phone"
            icon={<MdOutlineLocalPhone className="icon" />}
            type="text"
            placeholder="Enter your phone"
            value={user.phone}
            onChange={(e: any) => setUser({ ...user, phone: e.target.value })}
            errorMessage={
              error &&
              user.phone.length < 11 && (
                <p className="ERROR">
                  Phone number must be more than 10 letters
                </p>
              )
            }
          />

          <InputField
            title="Email"
            icon={<MdOutlineEmail className="icon" />}
            type="email"
            placeholder="Enter your Email"
            value={user.email}
            onChange={(e: any) => setUser({ ...user, email: e.target.value })}
            errorMessage={
              error &&
              (!isValidEmail(user.email) ? (
                <p className="ERROR">{user.email} is not an email</p>
              ) : usedEmail ? (
                <p className="ERROR">This email has been used before</p>
              ) : null)
            }
          />

          <InputField
            title="Password"
            icon={<CiLock className="icon" />}
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e: any) =>
              setUser({ ...user, password: e.target.value })
            }
            errorMessage={
              error &&
              user.password.length < 6 && (
                <p className="ERROR">
                  The password must be more than 6 letters
                </p>
              )
            }
          />

          <InputField
            title="Confirm password"
            icon={<CiLock className="icon" />}
            type="password"
            placeholder="Confirm password"
            value={user.confirmPassword}
            onChange={(e: any) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            errorMessage={
              error &&
              user.confirmPassword !== user.password && (
                <p className="ERROR">
                  The confirm password must be like than the password
                </p>
              )
            }
          />

          <div className="signUpButton">
            <button aria-label="button" onClick={handleSignUp} className="transition-all duration-100 focus:scale-90">
              Sign Up
            </button>
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
