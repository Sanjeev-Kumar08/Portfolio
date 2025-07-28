import { useState } from "react";
import PropTypes from "prop-types";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

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
        <header className="fixed top-[10px] z-1 font-Anastasia bg-white/10 backdrop-blur-[35px] rounded-full navbar-shadow transition-all duration-300 sm:w-1/2 w-full">
          <div className="flex items-center sm:justify-center justify-between px-6 sm:py-4 py-2 md:px-8">
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
      <>
        <div
          className={`fixed inset-0 bg-black/10 bg-opacity-50 z-40 transition-opacity duration-700 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`fixed top-[65px] right-0 h-[93%] w-full bg-black/50 rounded-2xl backdrop-blur-[5px] z-50 transform transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 mt-6 text-white text-lg">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="transition-transform text-left custom-meriva"
              >
                <span
                  className="relative inline-block pb-1 cursor-pointer hover:text-red-500
                  before:content-[''] before:absolute before:bottom-0 before:left-0
                  before:h-[3px] before:w-0 before:bg-red-500
                  before:transition-all before:duration-300 hover:before:w-full underline"
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
      </>
    </>
  );
}

// ✅ Add PropTypes
Navbar.propTypes = {
  handleScrollTo: PropTypes.func.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
      isResume: PropTypes.bool,
    }),
  ).isRequired,
};

export default Navbar;
