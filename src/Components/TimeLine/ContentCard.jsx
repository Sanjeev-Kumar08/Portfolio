import { useState } from "react";
import FadeInOnScroll from "../FadeInOnScroll/FadeInOnScroll";

const ContentCard = ({ item, isLeft }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth < 640) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <FadeInOnScroll>
      <div
        key={item.id}
        className={`relative flex items-center ${isLeft ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row sm:text-left"}`}
      >
        {/* DOT */}
        <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full  shadow-lg z-10"></div>

        <div
          className={`ml-8 sm:ml-0 sm:w-1/2 ${isLeft ? "sm:pr-12" : "sm:pl-12"}`}
        >
          <div
            className={`rounded-lg shadow-md border-none hover:shadow-lg transition-shadow duration-300 ${isLeft ? "sm:ml-7 ml-0" : "sm:mr-7 mr-0"} text-left`}
          >
            <div
              onClick={handleToggle}
              className="bg-transparent w-fit p-5 rounded-xl shadow-md border-b border-gray-400 text-left group"
            >
              <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-2">
                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent `}
                >
                  {item.position}
                </h3>
                <p
                  className={`w-fit h-fit px-3 py-1 text-sm rounded-full bg-gradient-to-r ${item.color} text-white text-nowrap`}
                >
                  {item.type}
                </p>
              </div>
              <div className="flex flex-col sm:justify-between sm:gap-0 gap-1 mt-3">
                <p
                  className="text-sm font-semibold bg-gradient-to-r text-white bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${item.color
                      .split(" ")
                      .slice(1)
                      .join(" ")
                      .replace("to-", "")})`,
                  }}
                >
                  {item.company}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">
                  {item.period} • {item.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${item.color} text-white`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`text-sm text-gray-700 dark:text-gray-300 space-y-1 
              max-h-0 overflow-hidden opacity-0 scale-y-90 transform 
              transition-all duration-300 ease-in-out
              group-hover:opacity-100 group-hover:scale-y-100 group-hover:max-h-[1000px]
              ${isOpen ? "opacity-100 scale-y-100 max-h-[1000px]" : ""}`}
              >
                {item.description.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span
                      className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r flex-shrink-0 ${item.color}`}
                    />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block sm:w-1/2"></div>
      </div>
    </FadeInOnScroll>
  );
};

export default ContentCard;
