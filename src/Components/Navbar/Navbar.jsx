import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Navbar({ handleScrollTo, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const resume = "/Sanjeev_Kumar_Resume.pdf";
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "Sanjeev_Resume.pdf");
    if (resume) {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <nav className="flex justify-center items-center">
        <header className="sticky top-[10px] z-[999] font-Anastasia bg-white/20 backdrop-blur-[5px] rounded-full navbar-shadow transition-all duration-300 sm:w-1/2 w-full">
          <div className="flex items-center sm:justify-center justify-between px-8 py-4 md:px-8">
            {/* Left Sub Container */}
            <div className="sm:hidden flex justify-center items-center tracking-[3px] sm:text-[40px] text-2xl custom-laisha font-bold text-[#836FFF]">
              <span className="text-red-100">Port</span>
              <span className="text-[#836FFF]">folio</span>
            </div>

            {/* Hamburger Button (Mobile only) */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-2xl focus:outline-none"
              >
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
              </button>
            </div>

            {/* Right Sub Container */}
            <nav className="w-full font-chivo hidden sm:block">
              <ul className="flex list-none justify-evenly items-center gap-6 lg:text-[18px] text-[16px] text-white">
                {navLinks.map((item, index) => (
                  <li key={index} className="transition-transform">
                    <span
                      className="relative inline-block pb-1 cursor-pointer
                    before:content-[''] before:absolute before:bottom-1 before:left-0
                    before:h-[3px] before:w-0 before:bg-red-500
                    before:transition-all before:duration-300 hover:before:w-full"
                      onClick={
                        item.isResume
                          ? handleDownload
                          : () => handleScrollTo(item.to)
                      }
                    >
                      {item.isResume ? (
                        <>
                          <FontAwesomeIcon
                            icon={faFileArrowDown}
                            className="mr-1"
                          />
                          Resume
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </nav>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 mt-3 backdrop-blur-3xl">
          <ul className="flex flex-col gap-4 text-white text-lg">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="transition-transform hover:scale-95 text-center"
              >
                <span
                  className="relative inline-block pb-1 cursor-pointer hover:text-red-500
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:h-[3px] before:w-0 before:bg-red-500
                before:transition-all before:duration-300 hover:before:w-full"
                  onClick={() => {
                    if (item.isResume) {
                      handleDownload();
                    } else {
                      handleScrollTo(item.to);
                    }
                    setMenuOpen(false);
                  }}
                >
                  {item.isResume ? (
                    <>
                      <FontAwesomeIcon
                        icon={faFileArrowDown}
                        className="mr-1"
                      />
                      Resume
                    </>
                  ) : (
                    item.label
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
