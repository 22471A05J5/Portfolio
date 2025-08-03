import React from "react";
import "./Skills.css";

const skills = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites using HTML, CSS, JavaScript, and React.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and experiences with Figma and Adobe XD.",
    icon: "🎨",
  },
  {
    title: "Database Management",
    description: "Working with MySQL, MongoDB, and Firebase for secure data storage.",
    icon: "🗄️",
  },
  {
    title: "Mobile Development",
    description: "Developing Android apps with Java and Kotlin, and cross-platform with Flutter.",
    icon: "📱",
  },
  {
    title: "Cloud Services",
    description: "Deploying scalable apps with AWS, Azure, and Firebase Hosting.",
    icon: "☁️",
  },
  {
    title: "Version Control",
    description: "Managing code efficiently using Git and GitHub.",
    icon: "🔧",
  },
];

export default function Skills() {
  return (
    <div className="skills-wrapper">
      <h2 className="skills-title">My Skills</h2>
      <div className="services-container">
        {skills.map((skill, index) => (
          <div key={index} className="service-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
