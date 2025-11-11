import React from "react";

export const PartnersSection: React.FC = () => {
  const partners = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/04b43b7e18586ebaee8ced52a2c229c1033dbbd9?placeholderIfAbsent=true",
      alt: "Partner 1",
      className: "aspect-[5.56] object-contain w-32 shrink-0 max-w-full",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ada59b34a3624da1201764acb94f7f3258caf2e1?placeholderIfAbsent=true",
      alt: "Partner 2",
      className: "aspect-[4.12] object-contain w-[115px] shrink-0 max-w-full",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/55012a3a274d8a13bf036abf56de6546344d720d?placeholderIfAbsent=true",
      alt: "Partner 3",
      className: "aspect-[3.3] object-contain w-[99px] shrink-0 mt-[5px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/9a5e7b782ea368f29f7e92cec8281980414257f3?placeholderIfAbsent=true",
      alt: "Partner 4",
      className: "aspect-[3.7] object-contain w-[100px] shrink-0 max-w-full",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ecf23d7560628174197f988ef9d525fb4c5df7e1?placeholderIfAbsent=true",
      alt: "Partner 5",
      className: "aspect-[4.57] object-contain w-[114px] shrink-0 max-w-full",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center -mt-8">
      {/* Text Above Logos */}
      <h2 className="text-gray-500 text-sm md:text-base font-medium mb-6 text-center">
        Trusted by Founders from
      </h2>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className={partner.className}
          />
        ))}
      </div>
    </section>
  );
};
