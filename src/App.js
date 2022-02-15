import logo from './logo.svg';
import './App.css';
import Home from './app/Home/Home';
import About from './app/About/About';
import Footer from './app/Footer/Footer';
import Login from './app/Login/Login';
import Register from './app/Register/Register';
import Contact from './app/Contact/Contact';
import Navigation from './app/Navigation/Navigation';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <div className="navigation">
          <Navigation />
        </div>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <div className="footer">
           <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
