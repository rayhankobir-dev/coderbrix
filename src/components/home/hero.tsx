/* eslint-disable @next/next/no-img-element */
import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-fit py-24 overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full"
        src="/images/vectors/shape.svg"
        alt="shape"
      />

      <div className="relative flex flex-col items-center gap-8 px-6 md:px-4">
        <div className="w-fit py-1.5 px-4 rounded-full bg-yellow-100">
          Reach out for development
        </div>
        <div className="max-w-3xl flex flex-col gap-5 mx-auto">
          <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-primary text-center">
            Ultimate solution for modern website
          </h1>
          <p className="font-manrope text-lg text-center">
            Things change. Markets and borrower needs evolve. Canopy provides
            modern lending built to adapt and grow
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 mt-2 md:mt-6 lg:mt-10">
          <button className="py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white">
            <span className="">Schedule a Call</span>
          </button>

          <button className="py-2.5 px-5 rounded-full border font-manrope text-base text-neutral-700">
            <span className="">Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
