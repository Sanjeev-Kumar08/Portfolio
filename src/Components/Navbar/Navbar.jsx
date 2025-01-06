import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
// import {resume} from '../../../public/Sanjeev-Kumar_Frontend-Developer_Resume.pdf'

function Navbar() {
  const handleDownload = () => {
    const resume =
      "../../../public/Sanjeev-Kumar_Frontend-Developer_Resume.pdf";
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "Resume.pdf");
    if (resume) {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <header className="navbar">
      <div className="navContainer">
        <div className="leftSubContainer">
          <h2 className="heading">
            <span className="port">Port</span>
            <span className="folio">folio</span>
          </h2>
        </div>
        <nav className="rightSubContainer">
          <ul className="list-items">
            <li className="list-item">
              <span className="item">
                <Link to="AboutSection" spy={true} smooth={true} offset={0} duration={500}>
                  About
                </Link>
              </span>
            </li>
            <li className="list-item">
              <span className="item">
                <Link to="SkillsSection" spy={true} smooth={true} offset={-40} duration={800}>
                  Skills
                </Link>
              </span>
            </li>
            <li className="list-item">
              <span className="item">
                <Link to="ProjectsSection" spy={true} smooth={true} offset={40} duration={800}>
                  Projects
                </Link>
              </span>
            </li>
            <li className="list-item">
              <span className="item">
                <Link to="ContactSection" spy={true} smooth={true} offset={40} duration={800}>
                  Contact
                </Link>
              </span>
            </li>
            <li className="list-item">
              <span className="item" onClick={handleDownload}>
                <FontAwesomeIcon icon={faFileArrowDown} /> Resume
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
