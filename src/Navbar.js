import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import "./Navbar.css";

export default function Navbar() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/Home" className="logo"><span>Siri</span>sha</Link>
        <nav>
          <ul className="nav_links">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
