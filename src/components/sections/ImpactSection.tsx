import React from "react";

export const ImpactSection: React.FC = () => {
  const impactStats = [
    {
      value: "$25M+",
      title: "Raised",
      description: "by founders who launched with us",
    },
    {
      value: "50+",
      title: "MVPs Built",
      description: "– live in market within 2 weeks",
    },
    {
      value: "5",
      title: "Startups Acquired",
      description: "after launching through LaunchPad Labs",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 mt-10 md:mt-[54px]">
      {/* Badge and heading */}
      <div className="flex flex-col items-center w-full max-w-[966px] text-center">
        {/* Badge */}
        <div className="flex items-center justify-center bg-[#f1f1f1] rounded-full px-1 py-1 sm:px-1 sm:py-1 mt-6 sm:mt-10">
          <div className="relative flex items-center gap-4 bg-white rounded-full px-4 py-1">
            <div className="relative flex items-center justify-center  mr-2">
              <div className="absolute w-[18px] h-[18px] bg-[#0764da33] rounded-full" />
              <div className="absolute w-3 h-3 bg-[#0764da52] rounded-md" />
              <div className="absolute w-2 h-2 bg-[#0764daa8] rounded-sm" />
            </div>
            <span className="text-sm sm:text-base font-medium text-black">
              Our Impact
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1f1f1f] mt-6 sm:mt-8 max-w-[727px]">
          Fast launches, Real results
        </h2>
      </div>

      {/* Impact Cards */}
      <div className="mt-10 sm:mt-12 md:mt-14 flex flex-wrap justify-center gap-2 sm:gap-8 md:gap-10 w-full max-w-[1000px]">
        {impactStats.map((stat, index) => (
          <div
            key={index}
            className="relative w-[90%] sm:w-[300px] md:w-[298px] h-[200px] sm:h-[230px] md:h-[246px] rounded-[23px] overflow-hidden bg-[linear-gradient(359deg,rgba(255,255,255,1)_25%,rgba(230,243,255,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(185,232,255,1)_0%,rgba(140,180,255,0.93)_46%,rgba(222,248,255,0.66)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none flex flex-col items-center justify-center text-center px-4"
          >
            <div className="font-semibold text-[#0766db] text-[42px] sm:text-[48px] md:text-[58px] leading-tight">
              {stat.value}
            </div>
            <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 max-w-[260px]">
              <span className="font-bold text-[#1a1a1a]">{stat.title}</span>{" "}
              <span className="font-medium text-[#4f4f4f]">
                {stat.description}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
