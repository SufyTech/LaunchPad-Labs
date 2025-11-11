import React from "react";

export const WhyLaunchpad: React.FC = () => {
  const cards = [
    {
      title: "MVP Package",
      img: "https://c.animaapp.com/DqygykGZ/img/frame-633@4x.png",
      description:
        "Everything you need \nSaaS, web app, or landing page\nbuild and launch-ready in 2 weeks.",
    },
    {
      title: "Integrations",
      img: "https://c.animaapp.com/DqygykGZ/img/frame-633-1.svg",
      description:
        "Payments, logins, emails & more.\nWe connect everything so you’re ready to onboard users from day one.",
    },
    {
      title: "Modern Stack",
      img: "https://c.animaapp.com/DqygykGZ/img/frame-633-2.svg",
      description:
        "Built with the latest tech and AI\ndelivering speed, stability, and scalability for real growth.",
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
      {/* Top Pill Label */}
      <button
        className="relative w-[180px] sm:w-[200px] md:w-[212px] h-11 sm:h-11 flex bg-[#f1f1f1] rounded-[31px] overflow-hidden border-[none]
        before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[31px]
        before:[background:linear-gradient(90deg,rgba(206,227,255,1)_0%,rgba(197,244,255,1)_100%)]
        before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
        before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]
        before:pointer-events-none cursor-pointer transition-all hover:opacity-90 active:scale-[0.98] mb-8"
        type="button"
        aria-label="Why LaunchPad Labs"
      >
        <div className="mt-1 w-[95%] h-9 ml-[2%] relative bg-white rounded-[83px] overflow-hidden">
          <span className="absolute top-2 left-[42px] sm:left-[47px] font-medium text-black text-xs sm:text-sm tracking-[0] leading-[normal]">
            Why LaunchPad Labs
          </span>

          <div
            className="absolute top-[9px] left-[17px] w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] bg-[#0764da33] rounded-[9px]"
            aria-hidden="true"
          />

          <div
            className="absolute top-[11px] sm:top-3 left-[20px] sm:left-[22px] w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#0764da52] rounded-md"
            aria-hidden="true"
          />

          <div
            className="absolute top-[13px] sm:top-3.5 left-[24px] sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#0764daa8] rounded"
            aria-hidden="true"
          />
        </div>
      </button>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] font-semibold text-[#1f1f1f] text-center mb-6 px-2">
        Built faster. Built smarter. Built by founders.
      </h2>

      {/* Subtext */}
      <p className="max-w-[800px] text-center text-sm sm:text-base md:text-lg text-neutral-600 mb-11 sm:mb-16 md:mb-20 leading-relaxed whitespace-pre-line px-4">
        MVPs built faster, smarter, and better – by founders who’ve done it
        before. We turn your idea into a launch-ready product in just{" "}
        <span className="font-bold text-[#333333]">2 weeks</span>, using modern
        tech and proven systems trusted by{" "}
        <span className="font-bold text-[#333333]">50+ funded startups</span>.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 w-full max-w-[1400px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-xl w-[85%] sm:w-[320px] md:w-[360px] lg:w-[381px] h-auto sm:h-[415px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full sm:w-[95%] h-[200px] sm:h-[240px] md:h-[260px] mt-3 object-cover rounded-t-2xl"
            />
            <h3 className="font-semibold text-[#3f3f3f] text-lg tracking-[0] leading-[31px] text-center mt-2">
              {card.title}
            </h3>
            <p className="font-normal text-[#474545] text-xs sm:text-sm text-center tracking-[0] leading-[22px] sm:leading-[25px] px-3 sm:px-4 mb-4 whitespace-pre-line">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLaunchpad;
