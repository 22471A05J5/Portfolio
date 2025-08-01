import React, { useEffect, useRef } from "react";
import "./Home.css";

export default function Home() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add("slide-in-left");
          imageRef.current.classList.add("slide-in-right");
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
  }, []);

  return (
    <section className="home-container" id="home">
      <div className="home-content hidden-left" ref={contentRef}>
        <h3>Welcome 👋</h3>
        <h1>
          I'm <span>Sirisha</span>
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I design and build elegant, responsive websites and interfaces using modern frontend technologies.
          Let's build something amazing together!
        </p>
        <div className="home-buttons">
          <a href="/projects" className="btn-primary">View Projects</a>
          <a href="/contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="home-image hidden-right" ref={imageRef}>
        <img src="/siri.jpg" alt="Sirisha" />
      </div>
    </section>
  );
}
