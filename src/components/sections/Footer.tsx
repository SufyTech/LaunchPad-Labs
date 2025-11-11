import React from "react";

export const Footer = () => {
  return (
    <footer
      className="
    relative sm:static
    w-full 
    flex flex-col 
    bg-white 
    px-4 sm:px-8 md:px-16 lg:px-24 
    py-10 sm:py-12 md:py-16 
    -mt-[400px] sm:-mt-[40px] md:-mt-[50px] lg:-mt-[60px]
  "
    >
      {" "}
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 md:gap-16">
        {/* Logo + Description */}
        <div className="flex flex-col gap-4 max-w-xs sm:max-w-sm">
          {/* Logo Row */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              alt="LaunchPad Logo"
              src="https://c.animaapp.com/6kiR9g8r/img/frame-631.svg"
            />
            <h1 className="text-xl sm:text-2xl font-semibold">
              <span className="bg-gradient-to-r from-[#2209A7] to-[#03BDF7] bg-clip-text text-transparent">
                LaunchPad
              </span>
              <span className="text-black"> Labs</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 leading-6 mt-2">
            We build high-quality MVPs to transform your ideas into reality.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"
              alt="Social 1"
              src="https://c.animaapp.com/6kiR9g8r/img/frame-632.svg"
            />
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"
              alt="Social 2"
              src="https://c.animaapp.com/6kiR9g8r/img/frame-634.svg"
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-black text-base sm:text-lg mb-2 sm:mb-3">
              Services
            </h3>
            <ul className="flex flex-col gap-3 text-sm sm:text-base text-[#606060]">
              {[
                "MVP Development",
                "UI/UX Design",
                "Web Development",
                "Mobile Apps",
                "Consulting",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-black text-base sm:text-lg mb-2 sm:mb-3">
              About
            </h3>
            <ul className="flex flex-col gap-3 text-sm sm:text-base text-[#606060]">
              {["Our Process", "How We Work", "Contact", "FAQs"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-semibold text-black text-base sm:text-lg mb-2 sm:mb-3">
              Portfolio
            </h3>
            <ul className="flex flex-col gap-3 text-sm sm:text-base text-[#606060]">
              {[
                "Case Studies",
                "Success Stories",
                "MVP Showcase",
                "Testimonials",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-black text-base sm:text-lg mb-2 sm:mb-3">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 text-sm sm:text-base text-[#606060]">
              {["Privacy Policy", "Terms of Services", "Cookie Policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Big Center Text */}
      <div
        className="
    text-transparent 
    bg-gradient-to-b from-[#C2DCFF] to-white 
    bg-clip-text 
    text-center 
    font-bold 
    tracking-[-0.5px] sm:tracking-[2px] md:tracking-[4px] lg:tracking-[6px]
    text-[12vw] sm:text-[90px] md:text-[140px] lg:text-[160px] 
    leading-none 
    mt-8 sm:mt-10 md:mt-12 lg:mt-14 
    -mb-6 sm:-mb-10 md:-mb-12 lg:-mb-9 
    select-none 
    pointer-events-none
  "
      >
        LaunchPad Labs
      </div>
      {/* Divider */}
      <hr className="w-full border-t border-gray-300 mt-8 sm:mt-10" />
      {/* Bottom Text */}
      <div className="text-center text-[#808080] text-xs sm:text-sm mt-4">
        © 2025 LaunchPad Labs. All rights reserved.
      </div>
    </footer>
  );
};
