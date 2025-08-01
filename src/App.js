import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const projects = [
    {
      name: 'Portfolio Website',
      link: 'https://sirisha-portfolio.netlify.app',
      description: 'My personal responsive portfolio built using React.',
    },
    {
      name: 'E-commerce App',
      link: 'https://sirisha-ecommerce.vercel.app',
      description: 'A full-featured shopping app using React & Firebase.',
    },
    {
      name: 'Weather App',
      link: 'https://sirisha-weather.vercel.app',
      description: 'Get weather updates using OpenWeather API.',
    },
  ];

  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <h1 className="hero-title">Hi, I'm Sirisha 👩‍💻</h1>
        <p className="hero-subtitle">A passionate Frontend Developer based in India.</p>
      </header>

      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={index}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="project-link">View Project →</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
