// src/About.js
import React, { useEffect, useRef } from "react";
import "./About.css";
import {
  FaBehance,
  FaDribbble,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";


export default function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image" ref={imageRef}>
          <img src="/siri.jpg" alt="Sirisha" />
        </div>

        <div className="about-text" ref={textRef}>
          <h2 className="about-heading">ABOUT ME</h2>
          <h3 className="about-role"><span>Sirisha</span> - Frontend Developer</h3>
          <p>
            I’m a passionate frontend developer who creates elegant and user-friendly websites.
            I love working with <strong>React.js</strong>, <strong>CSS animations</strong>, and clean UI/UX design.
          </p>
          <p>
            With a background in <strong>Computer Science</strong>, I’ve built various projects including responsive
            portfolios, e-commerce platforms, and dynamic SPAs. Always eager to learn and grow in the tech space.
          </p>

            <div className="social-icons">
              <a href="https://www.behance.net/" target="_blank" rel="noreferrer"><FaBehance /></a>
              <a href="https://dribbble.com/" target="_blank" rel="noreferrer"><FaDribbble /></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaXTwitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>

        </div>
      </div>
    </section>
  );
}
