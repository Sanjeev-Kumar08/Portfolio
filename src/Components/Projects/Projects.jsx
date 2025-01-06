import React from "react";
import ProjectCard from "../Card/ProjectCard";

import "./Projects.css";

function App() {
  const projects = [
    {
      id: 1,
      title: "Word Whisper",
      description:
        "Create, edit, and manage blog posts with secure authentication, user authorization, and customizable post visibility.",
      github: "https://github.com/Sanjeev-Kumar08/Word-Whisper",
      liveDemo: "https://word-whisper.vercel.app/",
      image: "/word-whisper.jpg",
    },
    {
      id: 2,
      title: "Guess The Number",
      description: "Guess the number, beat the odds!",
      github: "https://github.com/Sanjeev-Kumar08/Guess-The-Number",
      liveDemo: "https://guess-the-number-jet-psi.vercel.app/",
      image: "/guess-the-number.jpeg",
    },
    {
      id: 3,
      title: "Recipe Book",
      description:
        "Create, edit, and explore recipes with images and ingredients in a seamless web application.",
      github: "https://github.com/Sanjeev-Kumar08/Recipe-Book",
      liveDemo: "https://recipe-book-peach-nine.vercel.app/",
      image: "/recipe-book.jpeg",
    },
    {
      id: 4,
      title: "BMI-Calculator",
      description:
        "Give this BMI Calculator a try and find out if you're in good health!",
      github: "https://github.com/Sanjeev-Kumar08/BMI-Calculator",
      liveDemo: "#",
      image: "/bmi.jpg",
    },
    {
      id: 5,
      title: "Dynamic Dashboard",
      description:
        "Effortlessly manage and customize your dashboard with dynamic widgets and flexible JSON configuration.",
      github: "https://github.com/Sanjeev-Kumar08/CNAPP-Dashboard",
      liveDemo: "#",
      image: "/Dashboardd.jpg",
    },
    {
      id: 6,
      title: "Rock-Paper-Scissors",
      description:
        "Play the timeless Rock-Paper-Scissors game and test your choices!",
      github: "https://github.com/Sanjeev-Kumar08/Rock-Paper-Scissors-Game",
      liveDemo: "#",
      image: "/R-P-S.jpeg",
    },
    {
      id: 7,
      title: "To-Do App",
      description:
        "Stay organized and productive with a simple, efficient To-Do app.",
      github: "https://github.com/Sanjeev-Kumar08/To-Do-App",
      liveDemo: "#",
      image: "/todo.png",
    },
    {
      id: 8,
      title: "Password Generator",
      description:
        "Creates secure, customizable passwords with user-defined settings and intuitive controls",
      github: "https://github.com/Sanjeev-Kumar08/PasswordGenerator",
      liveDemo: "https://passwordgenerator-ruby-rho.vercel.app/",
      image: "/pass-generator.png",
    },
  ];

  return (
    <section id="ProjectsSection" className="project-section-container">
      <p className="para-text">Browse My Recent</p>
      <h1 className="projects-heading">
        <span className="black">Pro</span>
        <span className="red">jects</span>
      </h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default App;
