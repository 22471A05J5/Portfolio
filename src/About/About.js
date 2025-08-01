// src/About.js
import React, { useEffect, useRef } from "react";
import "./About.css";

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
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="underline"></div>

      <div className="about-content">
        <div className="about-image slide-right" ref={imageRef}>
          <img src="/siri.jpg" alt="Sirisha" />
        </div>
        <div className="about-text slide-left" ref={textRef}>
          <p>
            Hello! I'm <span className="highlight">Sirisha</span>, a passionate frontend developer who loves building
            modern, responsive websites and apps. I specialize in <span className="highlight">React.js</span>, and enjoy
            working with <span className="highlight">CSS animations</span>, <span className="highlight">JavaScript</span>, and
            <span className="highlight"> UI design</span>.
          </p>
          <p>
            I completed my degree in <span className="highlight">Computer Science</span>, and have built several projects
            including portfolios, e-commerce apps, and more. I'm always eager to learn and grow in the world of web
            development.
          </p>
          <ul className="about-details">
            <li><strong>Name:</strong> Sirisha</li>
            <li><strong>Location:</strong> Hyderabad, India</li>
            <li><strong>Email:</strong> sirisha@example.com</li>
            <li><strong>Skills:</strong> React.js, JavaScript, HTML5, CSS3, Git, Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
