import React from "react";

function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-4">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-4xl md:text-[64px] font-title font-bold leading-[30.8px] md:leading-[70.4px] text-[#101828] text-center">
          Contact Us
        </h1>

        <p className="text-base md:text-[20px] opacity-60 font-normal leading-[18.2px] md:leading-[26px] text-[#222222] text-center max-w-[500px] w-full mx-auto">
          We are here to help and answer any questions you might have. Here is
          how you can reach us.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
