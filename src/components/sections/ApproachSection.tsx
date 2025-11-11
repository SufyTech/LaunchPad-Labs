import React from "react";
import { SectionBadge } from "../ui/SectionBadge";

export const ApproachSection: React.FC = () => {
  const traditionalApproach = [
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/c8b1e70b28d58c4fd95bc42bcf49785122de42cf?placeholderIfAbsent=true", text: "Months of Planning" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/c8aaf389ba5be31dda259bd654b46a899cd1978d?placeholderIfAbsent=true", text: "Too Many Cooks" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/53b96b1f8eb0449161d301195ab89439b6849dcc?placeholderIfAbsent=true", text: "Design-Then-Build Bottlenecks" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/1d31e0f69da7bafd6ca93feae5c4907c6489b5ce?placeholderIfAbsent=true", text: "Huge Upfront Fees" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/617f7f4a8245554284b4d4cabb005e6b5e48ebaf?placeholderIfAbsent=true", text: "Complex Tech Steup" },
  ];

  const launchpadApproach = [
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/8b81469b8fdae873dfdb03687327ab068b3628eb?placeholderIfAbsent=true", text: "2-Week Launch System" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/002cd5189451d85bf53cec28096564c82e192167?placeholderIfAbsent=true", text: "Focused Founder-Led Pods" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/26df776346d45a7021e217e9510565c2d7e7ecc8?placeholderIfAbsent=true", text: "Real-Time Prototyping" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/d95770af69eca2dcd0ddaaaaba562ee6674fa1f1?placeholderIfAbsent=true", text: "Flat $4,997 Transparent Pricing" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/01cfd9243e7627408d9cb24f069a90f903170a81?placeholderIfAbsent=true", text: "Modern, Scalable Stack" },
  ];

  const handleBookCall = () => {
    console.log("Book My Free MVP Call clicked");
  };

  return (
    <section className="bg-[rgba(243,247,248,1)] w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-20 lg:py-[85px]">
      <div className="flex w-full max-w-[995px] flex-col items-center">
        {/* Section badge */}
        <SectionBadge>Our Approach</SectionBadge>

        {/* Heading */}
        <h2 className="text-[rgba(32,32,32,1)] text-xl sm:text-2xl md:text-3xl font-semibold text-center leading-snug mt-4 px-2">
          Why founders launch faster with LaunchPad Labs
        </h2>

        {/* Two-column comparison */}
        <div className="mt-10 sm:mt-16 w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
            {/* Traditional Approach */}
            <article className="flex-1">
              <div className="flex flex-col overflow-hidden text-sm sm:text-base text-black font-semibold leading-[28px] sm:leading-[31px] p-6 sm:pl-8 sm:pr-10 sm:pt-6 sm:pb-12 rounded-[20px] border-[rgba(255,172,172,1)] border-dashed border-2">
                <div className="bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.12)] mx-auto flex flex-col items-center text-[rgba(36,36,36,1)] justify-center px-5 sm:px-8 py-2 rounded-full">
                  <div>Traditional Development</div>
                </div>

                {traditionalApproach.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 sm:gap-5 mt-5">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 sm:w-10 md:w-[45px] object-contain"
                    />
                    <div>{item.text}</div>
                  </div>
                ))}
              </div>
            </article>

            {/* LaunchPad Approach */}
            <article className="flex-1">
              <div className="flex flex-col overflow-hidden text-sm sm:text-base text-black font-semibold leading-[28px] sm:leading-[31px] p-6 sm:pl-8 sm:pr-10 sm:pt-6 sm:pb-12 rounded-[20px] border-[rgba(85,226,148,1)] border-dashed border-2">
                <div className="bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.12)] mx-auto flex flex-col items-center text-[rgba(36,36,36,1)] justify-center px-5 sm:px-8 py-2 rounded-full">
                  <div>LaunchPad Labs Approach</div>
                </div>

                {launchpadApproach.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 sm:gap-5 mt-5">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 sm:w-10 md:w-[45px] object-contain"
                    />
                    <div>{item.text}</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={handleBookCall}
          className="bg-gradient-to-t from-[#0F93FF] to-[#003BB9] border-[2px] border-[#08cbfd] flex items-center justify-center text-sm sm:text-base text-white font-semibold mt-10 sm:mt-14 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-transform duration-200 hover:scale-[1.03]"
        >
          Book My Free MVP Call
        </button>
      </div>
    </section>
  );
};
