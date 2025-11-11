import React from "react";

const testimonialCards = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278.svg",
    position: { top: "150px", left: "670px" },
    border: "border-[#abd8ff]",
    shadow: "shadow-[0px_2px_10px_#66b7ff91]",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278-1.svg",
    position: { top: "45px", left: "987px" },
    border: "border-[#2599ff]",
    shadow: "shadow-[0px_2px_10px_#62b5ff91]",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278-2.svg",
    position: { top: "394px", left: "670px" },
    border: "border-[#abd8ff]",
    shadow: "shadow-[0px_2px_10px_#62b5ff91]",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278-3.svg",
    position: { top: "289px", left: "987px" },
    border: "border-[#abd8ff]",
    shadow: "shadow-[0px_2px_10px_#62b5ff91]",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278-4.svg",
    position: { top: "638px", left: "670px" },
    border: "border-[#abd8ff]",
    shadow: "shadow-[0px_2px_10px_#62b5ff91]",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278-5.svg",
    position: { top: "533px", left: "987px" },
    border: "border-[#abd8ff]",
    shadow: "shadow-[0px_2px_10px_#62b5ff91]",
  },
  {
    id: 7,
    name: "Sarah Johnson",
    role: "Software Developer",
    quote:
      "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    avatar: "https://c.animaapp.com/73FO00JZ/img/ellipse-1278-6.svg",
    position: { top: "777px", left: "987px" },
    border: "border-[#abd8ff]",
    shadow: "shadow-[0px_2px_21px_#0000001a]",
  },
];

const paginationDots = [
  { active: true, className: "w-4 h-4 bg-[#0083ff] rounded-lg" },
  {
    active: false,
    className: "w-[13px] h-[13px] bg-[#c9e4ff] rounded-[6.5px]",
  },
  {
    active: false,
    className: "w-[13px] h-[13px] bg-[#c9e4ff] rounded-[6.5px]",
  },
];

export const Testimonials = () => {
  return (
    <div className="w-full">
      {/* Mobile View - Single Column */}
      <div className="lg:hidden w-full px-1 py-8">
        <div className="flex justify-center mb-6">
          <div className="w-[151px] h-11 flex bg-[#f1f1f1] rounded-[31px] overflow-hidden border-none">
            <div className="m-auto flex items-center gap-2 bg-white rounded-full px-5 py-2">
              <div className="w-4 h-4 bg-[#0764da33] rounded-full relative">
                <div className="absolute top-[3px] left-[4px] w-2 h-2 bg-[#0764daa8] rounded-full" />
              </div>
              <span className="text-sm font-medium">Testimonials</span>
            </div>
          </div>
        </div>

        <h2 className="text-center font-semibold text-[#1f1f1f] text-2xl leading-10 mb-8 px-4">
          What Founders Are Saying About LaunchPad Labs
        </h2>

        {/* Main Video Card */}
        <div className="w-full max-w-md mx-auto mb-8">
          <article className="w-full bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_21px_#0000001a] px-7">
            <div className="mt-[9px] w-full h-[300px] mx-auto relative rounded-[11px] overflow-hidden bg-[linear-gradient(210deg,rgba(239,245,255,1)_54%,rgba(255,255,255,1)_100%)]">
              <img
                className="object-cover absolute top-2 left-2 w-[calc(100%-16px)] h-[280px]"
                alt="John Doe testimonial video thumbnail"
                src="https://c.animaapp.com/73FO00JZ/img/rectangle-2404@2x.png"
              />
              <div className="rounded-[3px] bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(0,107,184,0.35)_73%,rgba(0,31,54,0.35)_100%)] absolute top-2 left-2 w-[calc(100%-16px)] h-[280px]" />
              <button
                className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] bg-[#098cdd61] rounded-[32.5px] border-2 border-white shadow-[0px_4px_26px_#00000099] backdrop-blur-[2px]"
                aria-label="Play video testimonial from John Doe"
              >
                <img
                  className="absolute top-[12px] left-[13px] w-[42px] h-[42px]"
                  alt=""
                  src="https://c.animaapp.com/73FO00JZ/img/iconoir-play-solid.svg"
                />
              </button>
              <div className="absolute bottom-8 left-4 text-white text-base font-semibold">
                John Doe
              </div>
              <img
                className="absolute bottom-8 left-24 w-6 h-6"
                alt="Verified badge"
                src="https://c.animaapp.com/73FO00JZ/img/material-symbols-light-verified-rounded.svg"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm">
                Software Developer
              </div>
            </div>
          </article>
          
          <nav
            className="flex justify-center gap-[6px] mt-4"
            aria-label="Testimonial pagination"
          >
            {paginationDots.map((dot, index) => (
              <button
                key={index}
                className={dot.className}
                aria-current={dot.active ? "true" : "false"}
              />
            ))}
          </nav>
        </div>

        {/* Testimonial Cards in Single Column */}
        <div className="space-y-6 max-w-md mx-auto">
          {testimonialCards.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`w-full bg-white rounded-[14px] overflow-hidden border border-dashed ${testimonial.border} ${testimonial.shadow} p-4`}
            >
              <div className="flex items-start gap-3 mb-3">
                <img
                  className="w-[41px] h-[41px] object-cover"
                  alt={`${testimonial.name} avatar`}
                  src={testimonial.avatar}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-black text-[15px] font-semibold">
                      {testimonial.name}
                    </h3>
                    <img
                      className="w-3.5 h-3.5"
                      alt="Verified badge"
                      src="https://c.animaapp.com/73FO00JZ/img/material-symbols-light-verified-rounded-7.svg"
                    />
                  </div>
                  <p className="text-[#777777] text-[13px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="italic text-[#1a1a1a] text-sm leading-[30px] mb-3">
                "{testimonial.quote}"
              </blockquote>
              <img
                className="w-[104px] h-6"
                alt="5 star rating"
                src="https://c.animaapp.com/73FO00JZ/img/frame-667-6.svg"
              />
            </article>
          ))}
        </div>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden lg:flex justify-center overflow-x-auto px-2">
        <section
          className="
            relative bg-white overflow-hidden
            w-[1550px] h-[995px]
            transform origin-top
            scale-[0.45] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.9] xl:scale-100
            min-w-[900px] sm:min-w-[1100px] md:min-w-[1300px] lg:min-w-[1500px]
          "
          aria-label="Testimonials Section"
        >
          {/* Original Desktop Layout */}
          <div className="absolute top-[369px] left-[142px] w-[470px] h-[429px]">
            <img
              className="absolute top-[19px] left-8 w-[459px] h-[379px]"
              alt=""
              src="https://c.animaapp.com/73FO00JZ/img/frame-665.svg"
            />
            <img
              className="absolute top-1.5 left-1.5 w-[463px] h-[403px]"
              alt=""
              src="https://c.animaapp.com/73FO00JZ/img/frame-664.svg"
            />
            <article className="absolute top-0 left-0 w-[421px] h-[400px] flex bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_21px_#0000001a]">
              <div className="mt-[9px] w-[405px] h-[383px] ml-2 relative rounded-[11px] overflow-hidden bg-[linear-gradient(210deg,rgba(239,245,255,1)_54%,rgba(255,255,255,1)_100%)]">
                <img
                  className="object-cover absolute top-2 left-2 w-[389px] h-[370px]"
                  alt="John Doe testimonial video thumbnail"
                  src="https://c.animaapp.com/73FO00JZ/img/rectangle-2404@2x.png"
                />
                <div className="rounded-[3px] bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(0,107,184,0.35)_73%,rgba(0,31,54,0.35)_100%)] absolute top-2 left-2 w-[389px] h-[370px]" />
                <button
                  className="absolute top-[159px] left-[171px] w-[65px] h-[65px] bg-[#098cdd61] rounded-[32.5px] border-2 border-white shadow-[0px_4px_26px_#00000099] backdrop-blur-[2px]"
                  aria-label="Play video testimonial from John Doe"
                >
                  <img
                    className="absolute top-[12px] left-[13px] w-[42px] h-[42px]"
                    alt=""
                    src="https://c.animaapp.com/73FO00JZ/img/iconoir-play-solid.svg"
                  />
                </button>
                <div className="absolute top-[306px] left-[29px] text-white text-base font-semibold">
                  John Doe
                </div>
                <img
                  className="absolute top-[310px] left-[105px] w-6 h-6"
                  alt="Verified badge"
                  src="https://c.animaapp.com/73FO00JZ/img/material-symbols-light-verified-rounded.svg"
                />
                <div className="absolute top-[334px] left-[29px] text-white text-sm">
                  Software Developer
                </div>
              </div>
            </article>
            <nav
              className="absolute top-[413px] left-[175px] flex gap-[6px]"
              aria-label="Testimonial pagination"
            >
              {paginationDots.map((dot, index) => (
                <button
                  key={index}
                  className={dot.className}
                  aria-current={dot.active ? "true" : "false"}
                />
              ))}
            </nav>
          </div>

          {testimonialCards.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`absolute w-[302px] h-[225px] bg-white rounded-[14px] overflow-hidden border border-dashed ${testimonial.border} ${testimonial.shadow}`}
              style={{
                top: testimonial.position.top,
                left: testimonial.position.left,
              }}
            >
              <img
                className="absolute top-[21px] left-3.5 w-[41px] h-[41px] object-cover"
                alt={`${testimonial.name} avatar`}
                src={testimonial.avatar}
              />
              <h3 className="absolute top-4 left-[61px] text-black text-[15px] font-semibold">
                {testimonial.name}
              </h3>
              <img
                className="absolute top-[26px] left-[169px] w-3.5 h-3.5"
                alt="Verified badge"
                src="https://c.animaapp.com/73FO00JZ/img/material-symbols-light-verified-rounded-7.svg"
              />
              <p className="absolute top-[39px] left-[61px] text-[#777777] text-[13px]">
                {testimonial.role}
              </p>
              <blockquote className="absolute top-[81px] left-3.5 w-[277px] italic text-[#1a1a1a] text-sm leading-[30px]">
                "{testimonial.quote}"
              </blockquote>
              <img
                className="absolute top-[179px] left-3.5 w-[104px] h-6"
                alt="5 star rating"
                src="https://c.animaapp.com/73FO00JZ/img/frame-667-6.svg"
              />
            </article>
          ))}

          {/* Header */}
          <div className="absolute top-[60px] left-[636px] w-[151px] h-11 flex bg-[#f1f1f1] rounded-[31px] overflow-hidden border-none">
            <div className="m-auto flex items-center gap-2 bg-white rounded-full px-5 py-2">
              <div className="w-4 h-4 bg-[#0764da33] rounded-full relative">
                <div className="absolute top-[3px] left-[3px] w-2 h-2 bg-[#0764daa8] rounded-full" />
              </div>
              <span className="text-sm font-medium">Testimonials</span>
            </div>
          </div>

          <h2 className="absolute top-[251px] left-[142px] w-[403px] font-semibold text-[#1f1f1f] text-2xl leading-10">
            What Founders Are Saying About LaunchPad Labs
          </h2>
        </section>
      </div>
    </div>
  );
};