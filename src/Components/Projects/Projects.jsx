import React from "react";
import ProjectCard from "../Card/ProjectCard";

// import "./Projects.css";
import FadeInOnScroll from "../FadeInOnScroll/FadeInOnScroll";

const Projects = React.forwardRef((props, ref) => {
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
      image: "/passwordgenerator.jpg",
    },
  ];

  return (
    <FadeInOnScroll>
      <section
        ref={ref}
        id="ProjectsSection"
        className="px-4 py-12 sm:px-6 lg:px-20 bg-[rgba(245,245,245,0)] shadow-[0px_0px_10px_rgb(108,108,108)] rounded-[35px] mt-[50px] text-white sm:py-12 custom-meriva"
      >
        <p className="text-center text-lg sm:text-xl font-custom-meriva">
          Browse My Recent
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 font-custom-meriva tracking-[0.05em]">
          <span className="text-white">Pro</span>
          <span className="text-[#836FFF]">jects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </FadeInOnScroll>
  );
});

Projects.displayName = "Projects";

export default Projects;
