import { useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Particles from "./Components/Particles/Particles";
import Experince from "./Components/TimeLine/Timeline";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref) => {
    const isMobile = window.innerWidth < 640;
    const topOffset = isMobile ? 80 : 110;
    if (ref?.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", to: aboutRef },
    { label: "Skills", to: skillsRef },
    { label: "Experience", to: expRef },
    { label: "Projects", to: projectsRef },
    { label: "Contact", to: contactRef },
    { label: "Resume", isResume: true },
  ];

  return (
    <div className="m-2 sm:m-8 relative overflow-visible text-white">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={1000}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={300}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      >
        <Navbar handleScrollTo={handleScrollTo} navLinks={navLinks} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Experince ref={expRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Particles>
    </div>
  );
}

export default App;
