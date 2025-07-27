import React, { useState } from "react";
import Input from "../Input/Input";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FadeInOnScroll from "../FadeInOnScroll/FadeInOnScroll";
import { SiGmail } from "react-icons/si";

import "./contact.css";

const Contact = React.forwardRef((props, ref) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwlKaHFTDSOHSAlFM1fWvthltFygfAsl72r1yiSn9wDY30SB5RhaIXoYeeBej0gqffU/exec"; // Replace with your script URL

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((response) => {
        if (response.ok) {
          setSubmissionStatus("success");
          e.target.reset();
        } else {
          throw new Error("Failed to submit the form");
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setSubmissionStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);

        setTimeout(() => {
          setSubmissionStatus("");
        }, 6000);
      });
  };

  const socialLinks = [
    {
      icon: <SiGmail />,
      tooltip: "bhardwajsanjeev98055@gmail.com",
      link: "mailto:bhardwajsanjeev98055@gmail.com",
      hoverColor: "bg-[#836FFF]",
    },
    {
      icon: <FaLinkedin />,
      tooltip: "LinkedIn",
      link: "https://www.linkedin.com/in/sanjeev-kumar-a58852252/",
      hoverColor: "bg-[#0077b5]",
    },
    {
      icon: <SiGithub />,
      tooltip: "GitHub",
      link: "https://github.com/Sanjeev-Kumar08",
      hoverColor: "bg-[#333333]",
    },
    {
      icon: <SiLeetcode />,
      tooltip: "LeetCode",
      link: "https://leetcode.com/u/bracerishu/",
      hoverColor: "bg-[#ffa116]",
    },
    {
      icon: <FaInstagram />,
      tooltip: "Instagram",
      link: "https://www.instagram.com/your-profile",
      hoverColor: "bg-[#e4405f]",
    },
  ];

  return (
    <FadeInOnScroll>
      <section
        ref={ref}
        id="ContactSection"
        className="px-4 py-12 mt-[50px] text-white bg-[rgba(245,245,245,0)] shadow-[0px_0px_10px_rgb(108,108,108)] rounded-[35px]"
      >
        <p className="text-center custom-meriva text-base sm:text-lg">
          Want To Talk?
        </p>

        <h2 className="text-center custom-meriva  font-extrabold text-[38px] tracking-wider">
          <span className="text-white">Contact</span>{" "}
          <span className="text-[#836FFF]">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[13vw] px-6 md:px-20 items-center">
          <div className="flex justify-center items-center">
            <img
              src="/Contact-Me.svg"
              alt="contact-me"
              className="h-[80%] max-w-full object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              name="submit-to-google-sheet"
              className="flex flex-col gap-4 w-full max-w-md"
            >
              <div className="flex flex-col gap-4 w-full">
                <Input
                  name="Name"
                  type="text"
                  placeholder="Your Full Name"
                  id="name-field"
                  label="Your Name"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  id="email-field"
                  label="Your Email"
                  name="Email"
                />
                <Input
                  type="text"
                  placeholder="Type Message..."
                  id="message-field"
                  label="Message"
                  name="Message"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="text-[#836FFF] font-rubik px-6 py-2 text-lg rounded-lg border border-gray-500 bg-white transition-all duration-200 ease-in-out hover:scale-[1.07] font-medium custom-meriva hover:bg-[#836FFF] hover:text-white hover:border-[#836FFF] ml-2 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {submissionStatus === "success" && (
                <p className="text-green-500 font-rubik mt-2 p-2">
                  Message sent successfully!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-500 bg-blue-600 font-rubik mt-2 p-2">
                  There was a problem. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col justify-center items-center mt-12 px-6 md:px-20">
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:pt-10 w-full font-poppins">
            {/* Icon Item */}
            {socialLinks.map((item, idx) => (
              <li
                key={idx}
                className={`relative group bg-white hover:bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center shadow-md transition-all duration-300 ease-in-out cursor-pointer ${item.hoverColor}`}
              >
                <span className="absolute whitespace-nowrap text-white bg-[#836FFF] px-4 py-2 rounded-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-[180%] transition-all duration-300 z-10 custom-meriva">
                  {item.tooltip}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black group-hover:text-[#836FFF] transition-colors duration-300"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center mt-4 text-sm text-white custom-meriva">
            © 2025 Sanjeev-Kumar
          </div>
        </footer>
      </section>
    </FadeInOnScroll>
  );
});

export default Contact;
