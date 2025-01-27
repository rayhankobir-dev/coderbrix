/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowUpRight } from "lucide-react";

function Cta() {
  return (
    <section className="relative w-full h-fit py-20 md:py-36 bg-[#0c3721] overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover md:object-top"
        src="/images/vectors/cta-section.svg"
        alt="cta section"
      />

      <div className="relative max-w-3xl flex flex-col items-center justify-between gap-8 mx-auto px-6">
        <h1 className="font-semibold text-3xl md:text-6xl lg:text-7xl text-white text-center">
          Ultimate solution for modern website
        </h1>
        <p className="font-manrope text-base md:text-lg text-white text-center">
          Things change. Markets and borrower needs evolve. Canopy provides
          modern lending built to adapt and grow
        </p>

        <button className="flex items-center gap-2 py-2.5 px-5 rounded-full bg-white font-manrope">
          View more
          <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default Cta;
