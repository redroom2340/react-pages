// import logo from './logo.svg';
import "./App.scss";
import Home from "./app/Home/Home";
import Videos from "./app/videos/Videos";
import Sidebar from "./app/Sidebar/Sidebar";
import Login from "./app/Login/Login";
import Register from "./app/Register/Register";
import Photos from "./app/photos/photos";
import NewsBlog from "./app/news-blog/news-blog";
import Search from "./app/search/search";
import Profile from "./app/Profile/Profile";
import Setting from "./app/setting/Setting";
import Header from "./app/Header/Header";
import Wall from "./app/wall/Wall";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="main-page-container">
        <div className="sidebar-main">  
          <Sidebar />
        </div>
        <div className="main-container">
          <div className="Header-main">
            <Header />
          </div>
          <div className="das-min-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Wall" element={<Wall />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newsblog" element={<NewsBlog />} />
              <Route path="/photos" element={<Photos />} /> 
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
