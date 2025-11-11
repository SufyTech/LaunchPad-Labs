import React from "react";

export const Box: React.FC = () => {
  const backgroundImages = [
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/vector-2681@4x.png",
      alt: "Vector",
      className: "absolute top-0 left-[10%] w-1/3 max-w-[459px] h-auto",
    },
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/vector-2683@4x.png",
      alt: "Vector",
      className: "absolute top-0 right-[10%] w-1/3 max-w-[459px] h-auto",
    },
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/vector-2682@4x.png",
      alt: "Vector",
      className: "absolute top-0 left-0 w-1/2 max-w-[593px] h-auto opacity-60",
    },
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/vector-2684@4x.png",
      alt: "Vector",
      className: "absolute top-0 right-0 w-1/2 max-w-[593px] h-auto opacity-60",
    },
  ];

  const decorativeFrames = [
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/frame-621@4x.png",
      alt: "Frame",
      className: `
      absolute 
      bottom-[4%] sm:bottom-[25%] md:bottom-[22%] lg:bottom-[28%]
      left-[6%] sm:left-[8%] md:left-[10%] lg:left-[9%]
      w-12 sm:w-16 md:w-20 lg:w-24
      h-auto
      object-contain
    `,
    },
    {
      src: "src/assets/right1.png",
      alt: "Frame",
      className: `
      absolute 
      bottom-[10%] sm:bottom-[22%] md:bottom-[25%] lg:bottom-[50%]
      right-[-7%] sm:right-[5%] md:right-[8%] lg:right-[-3.5%]
      w-12 sm:w-16 md:w-20 lg:w-24
      h-auto
      object-contain
    `,
    },
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/frame-623@4x.png",
      alt: "Frame",
      className: `
      absolute 
      bottom-[4%] sm:bottom-[22%] md:bottom-[25%] lg:bottom-[28%]
      right-[6%] sm:right-[5%] md:right-[8%] lg:right-[9%]
      w-12 sm:w-16 md:w-20 lg:w-24
      h-auto
      object-contain
    `,
    },
    {
      src: "src/assets/left1.png",
      alt: "Frame",
      className: `
      absolute 
      bottom-[10%] sm:bottom-[22%] md:bottom-[25%] lg:bottom-[50%]
      left-[-7%] sm:left-[5%] md:left-[8%] lg:left-[-3.5%]
      w-12 sm:w-16 md:w-20 lg:w-24
      h-auto
      object-contain
    `,
    },
  ];

  const avatars = [
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/ellipse-1235.svg",
      alt: "Ellipse",
      className: "w-5 h-5",
    },
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/ellipse-1234.svg",
      alt: "Ellipse",
      className: "w-5 h-5 -ml-2",
    },
    {
      src: "https://c.animaapp.com/K5s4r3TC/img/ellipse-1236.svg",
      alt: "Ellipse",
      className: "w-5 h-5 -ml-2",
    },
  ];

  const newImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/KSAr399k/img/frame-596@4x.png",
      alt: "Frame 596",
      className: "w-1/3 sm:w-[45%] md:w-[278px] h-auto",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/KSAr399k/img/frame-597@4x.png",
      alt: "Frame 597",
      className: "w-1/3 sm:w-[45%] md:w-[277px] h-auto",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/KSAr399k/img/frame-595@4x.png",
      alt: "Frame 595",
      className:
        "w-[45%] sm:w-[40%] md:w-[242px] h-auto absolute -top-[9%] left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <div
      className="  relative 
  w-[90%] sm:w-[90%] md:w-[85%] lg:w-[90%] 
  max-w-[1450px] 
  mx-auto flex flex-col items-center justify-center mt-[-90px] sm:mt-[-100px] md:mt-[-120px] lg:mt-[-120px] px-2 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 mt-[320px] sm:mt-[-100px] md:mt-[-120px] lg:-mt-[50px] z-0 ">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>

      {/* Decorative Frames */}
      {decorativeFrames.map((frame, i) => (
        <img
          key={i}
          src={frame.src}
          alt={frame.alt}
          className={frame.className}
        />
      ))}

      {/* Main Hero Content */}
      <div
        className=" relative z-10 
    flex flex-col items-center justify-center text-center 
    w-[95%] sm:w-[90%] md:w-[85%] lg:w-full max-w-[900px] mx-auto
    -mt-2 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12
    py-8 sm:py-12 md:py-16 lg:py-20
    px-4 sm:px-6 md:px-8"
      >
        {/* Founders box */}
        <div className="flex items-center gap-3 px-5 py-2 bg-white rounded-full border border-blue-200 shadow-sm">
          <img
            src="https://c.animaapp.com/K5s4r3TC/img/group-1707483665.png"
            className="w-5 h-5"
            alt="icon"
          />
          <p className="text-xs sm:text-sm font-medium text-gray-900">
            5 Founders booked a call this week
          </p>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#1f1f1f] leading-tight flex flex-wrap justify-center items-center gap-2">
          We Build and
          <img
            src="https://c.animaapp.com/K5s4r3TC/img/frame-590.png"
            className="inline-block w-8 sm:w-10 md:w-14 lg:w-16 h-auto align-middle"
            alt="Rocket Icon"
          />
          Launch Your Startup MVP in Just
          <span className="text-[#2d9cdb] ml-1">2 Weeks</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 max-w-[90%] sm:max-w-[600px] mx-auto leading-relaxed">
          Launchpad builds and ships investor-ready MVPs for founders
        </p>

        {/* Trusted founders */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <div className="flex -space-x-2">
            {avatars.map((a, i) => (
              <img key={i} src={a.src} alt={a.alt} className={a.className} />
            ))}
          </div>
          <p className="text-sm sm:text-base font-semibold text-[#4c4c4c] text-center sm:text-left">
            Trusted by 50+ VC-backed founders
          </p>
        </div>

        {/* Product mockups */}
        <div className="relative flex justify-center items-center gap-3 sm:gap-6 mt-10 w-full max-w-[600px]">
          {newImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={img.className}
            />
          ))}
        </div>

        {/* Logos */}
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20 md:py-28">
      <Box />
    </section>
  );
};
