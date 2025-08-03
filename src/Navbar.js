import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills"; // 🔥 ADD THIS
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/Home" className="logo" onClick={closeMenu}>
          <span>Siri</span>sha
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>☰</div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav_links">
            <li><Link to="/Home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/About" onClick={closeMenu}>About</Link></li>
            <li><Link to="/Skills" onClick={closeMenu}>Skills</Link></li> {/* 🔥 ADD THIS */}
            <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} /> {/* 🔥 ADD THIS */}
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
