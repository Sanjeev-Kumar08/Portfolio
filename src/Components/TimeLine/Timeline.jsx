import React from "react";
import { SingleTimeLine } from "./SingleTimeLine";

const timelineData = [
  {
    id: "tunica-tech",
    position: "Software Developer",
    company: "Tunica Tech",
    period: "January 2025 – Present",
    location: "Solan, India",
    type: "Full-time",
    description: [
      "Building responsive and scalable user interfaces using Next.js and React Native in an Agile development environment",
      "Collaborating with backend and QA teams to integrate and validate RESTful APIs, ensuring smooth end-to-end functionality",
      "Participated in QA reviews and implemented testing strategies to ensure code quality and stability",
      "Took initiative in cross-functional collaboration, showcasing leadership in frontend module design discussions",
    ],
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "React Native",
      "RESTful APIs",
      "Agile",
      "QA Testing",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "salesqueen Software Solutions",
    position: "Frontend Developer Intern",
    company: "Salesqueen Software Solutions",
    period: "July 2024 – October 2024",
    location: "Remote",
    type: "Internship",
    description: [
      "Worked as a Frontend Developer, primarily responsible for developing responsive, interactive user interfaces",
      "Implemented technical frontend functionalities with focus on user experience",
      "Communicated effectively with the team to meet UI/UX standards and project requirements",
    ],
    skills: [
      "Frontend Development",
      "UI/UX",
      "Responsive Design",
      "Team Collaboration",
      "Cross-browser Testing",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    id: "code-clause",
    position: "Web Development Intern",
    company: "Code Clause",
    period: "February 2024 – March 2024",
    location: "Remote",
    type: "Internship",
    description: [
      "Designed and tested responsive, cross-browser compatible pages using HTML, CSS, and JavaScript",
      "Emphasized ethical coding practices, clean version control, and technical documentation",
      "Gained foundational skills in web development and version control systems",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    color: "from-orange-500 to-red-600",
  },
];

const Experince = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="AboutSection"
      className="w-full bg-[rgba(245,245,245,0)] shadow-[0px_0px_10px_rgb(108,108,108)] rounded-[35px] mt-[70px] text-white sm:py-12 py-9 sm:px-6 px-4"
    >
      <div className="w-full custom-meriva">
        <p className="text-center text-lg sm:text-xl custom-meriva">
          Walk Through My
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 custom-meriva tracking-[0.05em]">
          <span className="text-white">Professional </span>
          <span className="text-[#836FFF]">Journey</span>
        </h1>

        <SingleTimeLine items={timelineData} />
      </div>
    </section>
  );
});

Experince.displayName = "Experince";

export default Experince;
