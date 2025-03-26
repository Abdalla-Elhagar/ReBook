import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";
import Logo from "../../assets/projectLogo.png";

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
    <header className="header drop-shadow-lg shadow-md">
      <div className="container">
        <Link to="/home">
          <img
            src={Logo}
            alt="logo"
            className="logo"
          />
        </Link>

        <button onClick={handleShow} className="userButton">
          <CiUser />
        </button>
        {show && (
          <div className="userList z-50">
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
          </div>
        )}
      </div>
    </header>
  );
}
