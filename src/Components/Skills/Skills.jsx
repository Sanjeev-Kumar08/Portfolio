import React from "react";
import FadeInOnScroll from "../FadeInOnScroll/FadeInOnScroll";
import "./Skills.css";
import SkillsCarousel from "../../Components/SkillsCarousel/SkillsCarousel";

const Skills = React.forwardRef((props, ref) => {
  return (
    <FadeInOnScroll>
      <section
        ref={ref}
        id="SkillsSection"
        className="mb-2 bg-[rgba(245,245,245,0)] shadow-[0px_0px_10px_rgb(108,108,108)] rounded-[35px] mt-[50px] text-white sm:py-12 py-6 px-1"
      >
        <p className="text-center text-base sm:text-lg">Explore About</p>

        <h2 className="text-[38px] font-extrabold text-center mt-0 mb-4 custom-meriva">
          <span className="text-white">My</span>{" "}
          <span className="text-[#836FFF]">Skills</span>
        </h2>

        <SkillsCarousel />
      </section>
    </FadeInOnScroll>
  );
});

Skills.displayName = "Skills";

export default Skills;
