import React from "react";
import calendarMain from "../../assets/CalendarMain.png";
import timeSelect from "../../assets/timeSelect.png";

export const BannerWithFrame: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32 py-16 sm:py-20">
      {/* Background Blur Circles */}
      <div className="absolute bottom-5 right-5 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full bg-white blur-[60px] opacity-40"></div>
      <div className="absolute bottom-5 left-5 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full bg-white blur-[60px] opacity-70"></div>

      {/* Header Text */}
      <div
        className="
    text-center 
    mx-auto
    -mt-[390px] sm:mt-8 md:mt-10 lg:mt-12
    
    w-full max-w-[95%] sm:max-w-[600px] 
    px-2 sm:px-0
  "
      >
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 leading-snug">
          Ready to launch your next big idea?
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Book a consultation call and let&apos;s turn your vision into reality.
        </p>
      </div>

      {/* CTA Button */}
      <button className="mt-2 sm:mt-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-full bg-gradient-to-t from-[#0F93FF] to-[#003BB9] border-2 border-[#08cbfd] text-white font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:opacity-90 transition">
        Book My Free MVP Call
      </button>

      {/* Image Section */}
      <div className="relative mt-10 sm:mt-14 w-full flex flex-col items-center justify-center px-2 sm:px-4">
        <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex justify-center">
          {/* Main Calendar */}
          <img
            src={calendarMain}
            alt="Calendar Interface"
            className="w-full h-auto rounded-xl shadow-2xl"
          />

          {/* Floating Time Picker */}
          <img
            src={timeSelect}
            alt="Time Picker"
            className="
              absolute
              top-[20px] right-[0px]
              w-[100px]
              sm:top-[40px] sm:right-[-30px] sm:w-[180px]
              md:top-[60px] md:right-[-50px] md:w-[250px]
              lg:top-[70px] lg:right-[-150px] lg:w-[350px]
              rounded-xl cursor-pointer
              transition-all duration-300
            "
          />
        </div>
      </div>
    </section>
  );
};
