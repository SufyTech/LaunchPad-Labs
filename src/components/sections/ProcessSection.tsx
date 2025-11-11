import React from "react";

import launchCallImage from "../../assets/1.png";
import launchPlanImage from "../../assets/2.png";
import launchSprintImage from "../../assets/3.png";
import launchDeliveryImage from "../../assets/4.png";
import launchSupportImage from "../../assets/5.png";

export const ProcessSection = () => {
  const stepImages = {
    "01": launchCallImage,
    "02": launchPlanImage,
    "03": launchSprintImage,
    "04": launchDeliveryImage,
    "05": launchSupportImage,
  };

  return (
    <section className="relative w-full bg-white py-16 min-h-screen lg:h-[1270px] overflow-visible">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4">
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-[161px] h-11 flex bg-[#f1f1f1] rounded-[31px] relative overflow-hidden border-none before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[31px] before:[background:linear-gradient(90deg,rgba(206,227,255,1)_0%,rgba(197,244,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="mt-1 w-[153px] h-9 ml-1 relative bg-white rounded-[83px] overflow-hidden">
              <div className="absolute top-2 left-[51px] font-medium text-black text-sm">
                Our Process
              </div>
              <div className="absolute top-[9px] left-[19px] w-[18px] h-[18px] bg-[#0764da33] rounded-[9px]" />
              <div className="absolute top-3 left-[22px] w-3 h-3 bg-[#0764da52] rounded-md" />
              <div className="absolute top-3.5 left-6 w-2 h-2 bg-[#0764daa8] rounded" />
            </div>
          </div>
        </div>

        <h2 className="font-semibold text-[#1f1f1f] text-[24px] sm:text-[28px] leading-[31px] mb-3">
          The LaunchPad Process
        </h2>
        <p className="text-neutral-600 text-base leading-[31px] max-w-md sm:max-w-none">
          A transparent, founder-friendly journey from idea to live MVP in just{" "}
          <span className="font-bold text-[#333333]">2 weeks</span>.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative mt-12 flex flex-col items-center gap-10 lg:gap-14 px-4 lg:px-0">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 flex-wrap w-full">
          {/* Launch Call */}
          <div className="w-[360px] min-h-[418px] bg-white rounded-2xl shadow-[0px_2px_21px_#0000001a] relative overflow-hidden">
            <div className="absolute inset-2 rounded-lg bg-[linear-gradient(242deg,rgba(239,245,255,1)_67%,rgba(255,255,255,1)_100%)] overflow-hidden min-h-full">
              <div className="absolute top-[166px] left-[-22px] w-64 h-[272px] bg-[#eff5ff] rounded-[128px/136px] blur-[59px]" />
              <div className="absolute top-[-30px] left-0 w-[289px] h-[276px] bg-white rounded-[144.5px/138px] blur-[59px]" />
              <div className="absolute top-[7px] left-0 w-full h-[380px] flex items-center justify-center">
                <img
                  src={stepImages["01"]}
                  alt="Launch Call"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="absolute top-[91px] left-[23px] w-[90%] text-[#474545] text-sm leading-[25px] opacity-70">
              Kick off with a direct call with our founder. We clarify your
              idea, goals, and success metrics so we build exactly what
              investors and users will love.
            </p>
          </div>

          {/* Launch Plan */}
          <div className="w-[360px] min-h-[418px] bg-white rounded-2xl shadow-[0px_2px_21px_#0000001a] relative overflow-hidden">
            <div className="absolute inset-2 rounded-lg bg-[linear-gradient(242deg,rgba(239,245,255,1)_67%,rgba(255,255,255,1)_100%)] overflow-hidden min-h-full">
              <div className="absolute top-[166px] left-[-22px] w-64 h-[272px] bg-[#eff5ff] rounded-[128px/136px] blur-[59px]" />
              <div className="absolute top-[-30px] left-0 w-[289px] h-[276px] bg-white rounded-[144.5px/138px] blur-[59px]" />
              <div className="absolute top-[7px] left-0 w-full h-[390px] flex items-center justify-center">
                <img
                  src={stepImages["02"]}
                  alt="Launch Plan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="absolute top-[91px] left-[23px] w-[90%] text-[#474545] text-sm leading-[25px] opacity-70">
              We map your MVP blueprint and deliver a clear PRD defining
              features, flows, and timelines with zero fluff, zero surprises.
            </p>
          </div>

          {/* Launch Sprint */}
          <div className="w-[360px] min-h-[418px] bg-white rounded-2xl shadow-[0px_2px_21px_#0000001a] relative overflow-hidden">
            <div className="absolute inset-2 rounded-lg bg-[linear-gradient(242deg,rgba(239,245,255,1)_67%,rgba(255,255,255,1)_100%)] overflow-hidden min-h-full">
              <div className="absolute top-[166px] left-[-22px] w-64 h-[272px] bg-[#eff5ff] rounded-[128px/136px] blur-[59px]" />
              <div className="absolute top-[-30px] left-0 w-[289px] h-[276px] bg-white rounded-[144.5px/138px] blur-[59px]" />
              <div className="absolute top-[7px] left-0 w-full h-[390px] flex items-center justify-center">
                <img
                  src={stepImages["03"]}
                  alt="Launch Sprint"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="absolute top-[91px] left-[23px] w-[90%] text-[#474545] text-sm leading-[25px] opacity-70">
              Our dev team moves fast with daily updates, transparent progress,
              and agile feedback loops. You'll see your product take shape in
              real time.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 flex-wrap w-full">
          {/* Launch Delivery */}
          <div className="w-[360px] lg:w-[558px] min-h-[260px] sm:min-h-[400px] lg:min-h-[418px] bg-white rounded-2xl shadow-[0px_2px_21px_#0000001a] relative overflow-hidden">
            <div className="absolute inset-2 rounded-lg bg-[linear-gradient(242deg,rgba(239,245,255,1)_67%,rgba(255,255,255,1)_100%)] overflow-hidden min-h-full">
              <div className="absolute top-[166px] left-[-22px] w-64 h-[272px] bg-[#eff5ff] rounded-[128px/136px] blur-[59px]" />
              <div className="absolute top-0.5 left-0 w-[451px] h-[279px] bg-white rounded-[225.5px/139.5px] blur-[59px]" />
              <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src={stepImages["04"]}
                  alt="Launch Delivery"
                  className="absolute inset-0 w-[400px] h-[250px] sm:w-[320px] sm:h-[260px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] xl:w-[550px] xl:h-[380px] object-cover mx-auto left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
            <p className="absolute top-[60px] sm:top-[85px] md:top-[91px] left-[15px] sm:left-[20px] w-[92%] sm:w-[90%] text-[#474545] text-xs sm:text-sm md:text-base leading-[20px] sm:leading-[23px] md:leading-[25px] opacity-70">
              Your MVP goes live — fully functional, tested, and ready for
              demos, users, or fundraising. We handle deployment and hosting so
              you focus on traction.
            </p>
          </div>

          {/* Launch Support */}
          <div className="w-[360px] lg:w-[565px] min-h-[275px] sm:min-h-[400px] lg:min-h-[418px] bg-white rounded-2xl shadow-[0px_2px_21px_#0000001a] relative overflow-hidden">
            <div className="absolute inset-2 rounded-lg bg-[linear-gradient(242deg,rgba(239,245,255,1)_67%,rgba(255,255,255,1)_100%)] overflow-hidden min-h-full">
              <div className="relative top-[0px] left-[-22px] w-64 h-[220px] bg-[#eff5ff] rounded-[128px/136px] blur-[59px]" />
              <div className="absolute top-0.5 left-0 w-[451px] h-[279px] bg-white rounded-[225.5px/139.5px] blur-[59px]" />
              <div className="absolute top-[7px] left-0 w-full h-[280px] sm:h-[300px] md:h-[350px] lg:h-[390px] flex items-center justify-center">
                <img
                  src={stepImages["05"]}
                  alt="Launch Support"
                  className="absolute inset-0 w-[400px] h-[255px] sm:w-[320px] sm:h-[260px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] xl:w-[550px] xl:h-[380px] object-cover mx-auto left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
            <p className="absolute top-[63px] sm:top-[85px] md:top-[91px] left-[15px] sm:left-[20px] w-[92%] sm:w-[90%] text-[#474545] text-xs sm:text-sm md:text-base leading-[20px] sm:leading-[23px] md:leading-[25px] opacity-70">
              You get 4 weeks of free maintenance and optimization. We fix,
              tune, and upgrade ensuring your MVP runs smooth post-launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
