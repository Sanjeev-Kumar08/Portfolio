import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import "./About.css";
import SplitText from "../SplitText";
import FadeInOnScroll from "../FadeInOnScroll/FadeInOnScroll";

const About = React.forwardRef((props, ref) => {
  const emailAddress = "bhardwajsanjeev98055@example.com"; // Replace with your email
  const subject = "Interested in Hiring You"; // Optional
  const body = "Hello, I am interested in discussing an opportunity with you."; // Optional

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <FadeInOnScroll>
      <section
        ref={ref}
        id="AboutSection"
        className="flex md:flex-row flex-col justify-around items-center custom-chivo bg-[rgba(245,245,245,0)] shadow-[0px_0px_10px_rgb(108,108,108)] rounded-[35px] mt-[50px] text-white sm:py-12 py-6 px-1"
      >
        <article className="sm:w-1/2 w-full custom-meriva md:order-1 order-2 sm:px-0 px-2">
          <h1 className="frontline tracking-[0.03em]">
            <SplitText
              text="Hi there, I'm Sanjeev Kumar!"
              className="font-semibold text-center sm:text-[1.5rem] md:text-[2.5rem] text-[20px]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
          <p className="font-bold sm:text-[1rem] md:text-[2rem] text-[16px] sm:ml-4">
            {"a "}
            <span style={{ color: "#836FFF" }}>
              <Typewriter
                words={[
                  "Software Developer",
                  "Frontend Developer",
                  "React-Native Developer",
                  "MERN Developer",
                  "Problem Solver",
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

          <div className="custom-meriva sm:text-[16px] md:text-[18px] text-[14px]">
            <p className="sm:ml-4 mb-2 mt-4">
              I'm a <span className="highlight">Software Developer</span> and
              CSE graduate with a strong focus on frontend technologies. I
              specialize in building responsive and user-centric applications
              using <span className="highlight">JavaScript</span>,{" "}
              <span className="highlight">React.js</span>,{" "}
              <span className="highlight">Next.js</span>, and{" "}
              <span className="highlight">React Native</span>, while also
              leveraging backend tools like{" "}
              <span className="highlight">Node.js</span> and{" "}
              <span className="highlight">MongoDB</span>.
            </p>
            <p className="sm:ml-4 mb-2">
              I’m passionate about creating seamless user experiences,
              integrating <span className="highlight">REST APIs</span>, and
              writing <span className="highlight">clean, scalable code</span>.
              My experience across multiple internships and real-world projects
              has helped me build a strong foundation in{" "}
              <span className="highlight">web development</span> and{" "}
              <span className="highlight">mobile app development</span>.
            </p>
            <p className="sm:ml-4 mb-2">
              I’m always eager to learn, improve, and contribute to impactful
              products through modern{" "}
              <span className="highlight">frontend frameworks</span> and{" "}
              <span className="highlight">best practices</span>.
            </p>
          </div>

          <div className="mt-4 ml-4 flex justify-start items-center gap-[2%]">
            <button
              className="Btn"
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
          </div>
        </article>

        <div className="order-1 sm:w-[50%] w-[70%] md:w-[30%] overflow-hidden [clip-path:ellipse(50%_50%_at_50%_50%)]">
          <img
            src="/profile.png"
            alt="Sanjeev Kumar"
            className="w-full h-full object-cover transition ease-in-out duration-500 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
          />
        </div>
      </section>
    </FadeInOnScroll>
  );
});

export default About;
