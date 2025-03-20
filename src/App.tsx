import "./main.scss";
import "./App.css";
import Login from "./pages/logIn/logIn";
import { Route, Routes } from "react-router";
import SignUp from "./pages/signUp/signUp";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Home from "./pages/home/home";
import BookPage from "./pages/book/book";
import Header from "./components/header/header";
// import { localUsers } from "./data";


// localStorage.getItem("garduationProjectUsers")
//   ? null
//   : localStorage.setItem("garduationProjectUsers", JSON.stringify(localUsers));

function App() {
  const navigate: any = useNavigate();
  const loginUser1 = localStorage.getItem("loginUser");
  useEffect(() => {
    if (location.pathname !== "/signUp") {
      if (loginUser1) {
        navigate("/home");
        if (location.pathname === "/signUp" || location.pathname === "/logIn") {
          navigate("/home");
        }
      } else {
        if (location.pathname !== "/signUp") {
          navigate("/logIn");
        }
      }
    }
  }, []);

  return (
    <div className="app">
      {location.pathname !== "/signUp" && location.pathname !== "/logIn" ? <Header /> : null}
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/bookPage" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
