import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import "./About.css";

function About() {
  const emailAddress = "bhardwajsanjeev98055@example.com"; // Replace with your email
  const subject = "Interested in Hiring You"; // Optional
  const body = "Hello, I am interested in discussing an opportunity with you."; // Optional

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section id="AboutSection" className="container">
      <article className="aboutSection">
        <h1 className="frontline">
          Hi there, I'm
          <span className="firstName">Sanjeev </span>
          <span className="lastName">Kumar</span>
        </h1>
        <p className="animated-text">
          {"a "}
          <span style={{ color: "red" }}>
            <Typewriter
              words={[
                "Frontend Web Developer",
                "Software Engineer",
                "Programmer",
              ]}
              loop={0}
              cursor
              cursorStyle="."
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </p>
        <p className="about-info">
          I'm a Frontend Developer and final-year CSE student with expertise in
          crafting intuitive and responsive web applications. I specialize in{" "}
          <span className="highlight">JavaScript</span>,{" "}
          <span className="highlight">React.js</span>, and modern{" "}
          <span className="highlight">frontend frameworks</span>, focusing on
          creating seamless user experiences and efficient solutions.{" "}
        </p>
        <p className="about-info">
          While I’m just starting my journey in software development, my passion
          and dedication drive me to deliver excellence.
        </p>

        <div className="buttons">
          <button
            className="hire-me-button"
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link
              to="ContactSection"
              spy={true}
              smooth={true}
              offset={40}
              duration={800}
            >
              Hire Me
            </Link>
          </button>
          <button className="lets-talk-button">
          <Link
              to="ContactSection"
              spy={true}
              smooth={true}
              offset={40}
              duration={800}
            >
              Let's talk
            </Link>
          </button>
        </div>
      </article>

      <div className="imageSection">
        <img
          src="/profile.png"
          alt="Sanjeev Kumar"
          className="profile"
        />
      </div>
    </section>
  );
}

export default About;
