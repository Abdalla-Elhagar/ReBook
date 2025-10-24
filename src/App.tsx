import "./main.scss";
import "./App.css";
import Login from "./pages/logIn/logIn";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import Home from "./pages/home/home";
import BookPage from "./pages/book/book";
import Header from "./components/header/header";
import MyProfile from "./pages/profile/profile";
import SearchPage from "./pages/searchPage/searchPage";
import CategoryPage from "./pages/CategoryPage";
import { AddBook } from "./pages/AddBook";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { usersData } from "./api/usersData";
import { handleLogedInUser } from "./slices/logInAndSignUp";

function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  const [users, setUsers] = useState([])
    useEffect(()=> {
      const fetchUsersData= async ()=>{
        const usersRef = await usersData()
  
        if (usersRef) {
          setUsers(usersRef)
           dispatch(handleLogedInUser(usersRef))
        }
      }
    fetchUsersData()

   
    },[dispatch])

  return (
    <div className="app overflow-hidden">
      {location.pathname === "/signUp" || location.pathname === "/login" ? null : <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/bookPage" element={<BookPage />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
