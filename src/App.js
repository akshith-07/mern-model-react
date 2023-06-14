import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Booking from "./Components/Booking";
import Contact from "./Components/Contact";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">
            Booking
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    
  );
};

export default App;
