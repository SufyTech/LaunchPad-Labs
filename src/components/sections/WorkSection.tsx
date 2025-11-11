import React, { useEffect, useRef } from "react";
import "../../WorkSection.css"; // keeps your scrollbar styling

export const WorkSection: React.FC = () => {
  const projects = [
    { src: "../assets/Billflow.png", name: "BillFlow" },
    { src: "../assets/FitAI.png", name: "FitAI" },
    { src: "../assets/Finsub.png", name: "FinSub" },
    { src: "../assets/Billflow.png", name: "BillFlow" },
    { src: "../assets/Finsub.png", name: "FinSub" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 5) {
        // Smoothly return to start when reaching the end
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll smoothly by one card width (or similar)
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    };

    const interval = setInterval(scrollStep, 4000); // scroll every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center bg-[#f3f7f8] overflow-hidden mb-16 py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Badge */}
      <div className="mx-auto flex items-center justify-center bg-[#f1f1f1] rounded-full px-1 py-1 sm:px-1 sm:py-1 mt-10 sm:mt-[85px]">
        <div className="relative flex items-center bg-white rounded-full gap-2 px-4 py-1">
          <div className="relative flex items-center justify-center  mr-2">
            <div className="absolute w-[18px] h-[18px] bg-[#0764da33] rounded-full" />
            <div className="absolute w-3 h-3 bg-[#0764da52] rounded-md" />
            <div className="absolute w-2 h-2 bg-[#0764daa8] rounded-sm" />
          </div>
          <span className="text-sm sm:text-base font-medium text-black">
            Our Work
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="mt-6 sm:mt-7 text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#1f1f1f] max-w-[700px] px-2">
        Every product here went from idea to live in 2 weeks
      </h2>
      <p className="text-neutral-600 text-sm sm:text-base font-medium text-center mt-3 sm:mt-[15px] px-3">
        Built, launched, and loved by real users
      </p>

      {/* Scrollable project cards */}
      <div
        ref={scrollRef}
        className="mt-10 sm:mt-14 w-full overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-4 sm:gap-6 min-w-max px-2 pb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative w-[250px] sm:w-[300px] md:w-[339px] h-[230px] sm:h-[260px] md:h-[290px] bg-white rounded-2xl overflow-hidden shadow-[0px_2px_21px_rgba(0,0,0,0.1)] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image container */}
              <div className="absolute top-2 left-2 right-2 h-[70%] bg-[#b9ddfb] rounded-lg overflow-hidden p-2">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Name and arrow */}
              <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 flex items-center justify-between font-semibold text-[#3f3f3f] text-sm sm:text-base">
                <span>{project.name}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black transform transition-transform duration-300 cursor-pointer group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 19L19 5M19 5h-7M19 5v7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
