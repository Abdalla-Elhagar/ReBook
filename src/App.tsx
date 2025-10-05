import "./main.scss";
import "./App.css";
import Login from "./pages/logIn/logIn";
import { Route, Routes } from "react-router";
import SignUp from "./pages/signUp/signUp";
import Home from "./pages/home/home";
import BookPage from "./pages/book/book";
import Header from "./components/header/header";
import MyProfile from "./pages/profile/profile";
import SearchPage from "./pages/searchPage/searchPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="app overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
