import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import "./Skills.css";

function Skills() {
  return (
    <section id="SkillsSection" className="skills-main-container">
      <p className="para-text">Explore About</p>
      <h2 className="skill-heading">
        <span className="my">My</span> <span className="skills">Skills</span>
      </h2>

      <section className="skills-section">
        {/* FrontEnd */}
        <div className="card-container">
          <h2 className="skill-card-heading">Frontend</h2>
          <div className="inner-container">
            <ul className="skills-list">
              <li className="skill-list-item">
                <div>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#e54343" }}
                    className="skill-icon"
                  />
                </div>
                <p>HTML5</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "#2a4acb" }}
                    className="skill-icon"
                  />
                </div>
                <p>CSS3</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                    className="skill-icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <p>JavaScript</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ color: "#37a6fb" }}
                    className="skill-icon"
                  />
                </div>
                <p>React</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    style={{ color: "#6b3fee" }}
                    className="skill-icon"
                  />
                </div>
                <p>Bootstrap</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="Tailwind CSS"
                    className="skill-icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <p>Tailwind</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="src\assets\redux-logo.svg"
                    alt="Redux"
                    className="skill-icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <p>Redux</p>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="skill-text-container">
          <p>
            As a passionate{" "}
            <span className="highlight">Frontend Developer</span>, I specialize
            in creating intuitive, visually appealing web interfaces using
            HTML5, CSS3, JavaScript, React.js, and Redux.{" "}
          </p>
          <p>
            Leveraging tools like Tailwind CSS and Bootstrap, I design{" "}
            <span className="highlight">responsive</span>,{" "}
            <span className="highlight">user-friendly applications</span> that
            transform ideas into impactful solutions.
          </p>
        </div>

        <div className="skill-text-container">
          <p>
            With a strong programming foundation, I am proficient in{" "}
            <span className="highlight">multiple languages</span>, including C,
            C++, Java, Python, and JavaScript. These skills allow me to approach
            problems with versatility and create
            <span className="highlight"> efficient</span>, scalable solutions.
          </p>
        </div> */}
        {/* Programming Languages */}
        <div className="card-container">
          <h2 className="skill-card-heading">Programming Languages</h2>
          <div className="inner-container">
            <ul className="skills-list">
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                    alt="C"
                    className="skill-icon"
                    style={{ width: "30px", height: "35px" }}
                  />
                </div>
                <p>C</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                    alt="C++"
                    className="skill-icon"
                    style={{ width: "30px", height: "35px" }}
                  />
                </div>
                <p>C++</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                    alt="Java"
                    className="skill-icon"
                    style={{ width: "35px", height: "40px" }}
                  />
                </div>
                <p>Java</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                    className="skill-icon"
                    style={{ width: "30px", height: "35px" }}
                  />
                </div>
                <p>Python</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                    className="skill-icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <p>JavaScript</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools */}
        <div className="card-container">
          <h2 className="skill-card-heading">Technical Tools</h2>
          <div className="inner-container">
            <ul className="skills-list">
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                    alt="VS Code"
                    className="skill-icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <p>VS Code</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="src\assets\file-type-git.svg"
                    alt="Git"
                    className="skill-icon"
                    style={{ width: "40px", height: "30px" }}
                  />
                </div>
                <p>Git</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className="skill-icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <p>GitHub</p>
              </li>
              <li className="skill-list-item">
                <div>
                  <img
                    src="src\assets\postman.svg"
                    alt="Postman"
                    className="skill-icon"
                    style={{ width: "35px", height: "30px" }}
                  />
                </div>
                <p>Postman</p>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="skill-text-container">
          <p>
            I use VS Code for{" "}
            <span className="highlight">efficient coding</span>, Git and GitHub
            for <span className="highlight">version control</span> and
            collaboration, and Postman for{" "}
            <span className="highlight">API testing</span> and debugging,
            ensuring smooth{" "}
            <span className="highlight">backend integration</span> and
            high-quality solutions.
          </p>
        </div> */}
      </section>
    </section>
  );
}

export default Skills;
