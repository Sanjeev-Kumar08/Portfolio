import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import skillsData from "../../data";

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === skillsData.length - 1 ? 0 : prevIndex + 1,
        );
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? skillsData.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === skillsData.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto custom-meriva">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Container */}
        <div className="relative overflow-hidden h-auto ">
          <div
            className="flex transition-transform border-none duration-500 ease-in-out pb-6 "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {skillsData.map(({ category, skills }, index) => (
              <div key={category} className="w-full flex-shrink-0 p-8 h-auto">
                <div className="text-center h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in custom-meriva">
                    {category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto items-center">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-120 hover:shadow-lg"
                        style={{
                          animationDelay: `${skillIndex * 150}ms`,
                          animation:
                            currentIndex === index
                              ? "slideUp 0.6s ease-out forwards"
                              : "none",
                        }}
                      >
                        {skill.iconType === "fa" ? (
                          <FontAwesomeIcon
                            icon={skill.icon}
                            size="2x"
                            style={{ color: skill.color || "#000" }}
                            className="mb-3 drop-shadow-sm"
                          />
                        ) : (
                          <img
                            src={skill.src}
                            alt={skill.name}
                            className="mb-3 w-10 h-10 object-contain"
                          />
                        )}
                        <p className="text-sm font-medium text-gray-700 text-center">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute sm:left-4 left-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full sm:p-3 p-1  transition-all duration-300 hover:scale-110 group cursor-pointer"
        >
          <ChevronLeft
            size={24}
            className="text-gray-700 group-hover:text-blue-600"
          />
        </button>

        <button
          onClick={goToNext}
          className="absolute sm:right-4 right-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full sm:p-3 p-1 transition-all duration-300 hover:scale-110 group cursor-pointer"
        >
          <ChevronRight
            size={24}
            className="text-gray-700 group-hover:text-blue-600"
          />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {skillsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div
          className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / skillsData.length) * 100}%`,
            background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
          }}
        />
      </div>
    </div>
  );
}
