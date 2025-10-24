import Logo from "../../assets/projectLogo.webp";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { login } from "../../slices/logInAndSignUp";
import { InputField } from "../../components/common/InputField";

export default function Login() {
  const navigate: any = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);


  async function handleLogin() {
    const res = await fetch(`https://rebook-backend-0.vercel.app/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      setError(true);
      return;
    }
    setError(false);

    const data = await res.json();

    dispatch(login({ token: data, email: user.email }));

    navigate("/");
        location.reload()

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
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
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
          <InputField
            title="Email"
            icon={<MdOutlineEmail className="icon" />}
            type="email"
            placeholder="Enter your Email"
            value={user.email}
            onChange={(e: any) => setUser({ ...user, email: e.target.value })}
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
          />

          <div className="loginButton">
            <button aria-label="button" onClick={handleLogin}>
              Login
            </button>
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
