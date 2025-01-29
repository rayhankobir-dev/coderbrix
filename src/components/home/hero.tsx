/* eslint-disable @next/next/no-img-element */
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section id="home" className="relative w-full h-fit py-24 overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full"
        src="/images/vectors/shape.svg"
        alt="shape"
      />

      <div className="relative flex flex-col items-center gap-8 px-6 md:px-4">
        <div className="w-fit py-1.5 px-4 rounded-full bg-yellow-100">
          Reach out for development
        </div>
        <div className="max-w-3xl flex flex-col gap-6 mx-auto">
          <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl text-primary/90 text-center">
            <span className="font-title font-semibold">
              Ultimate destination
            </span>
            <br />
            <span className="font-uncut tracking-tighter">
              for software solutions.
            </span>
          </h1>
          <p className="font-manrope text-xl text-center">
            At Coderbrix, we combine the latest technologies, technical skills
            and industry expertise to build the most powerful software solutions
            that help you to scale up your business.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 mt-2 md:mt-6 lg:mt-10">
          <Link
            className="block py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white"
            href="https://calendly.com/coderbrix"
          >
            Schedule a Call
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 py-2.5 px-5 rounded-full border font-medium font-manrope text-base text-neutral-700 hover:border-primary/90 hover:text-primary/90 duration-500"
          >
            <PhoneIcon size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
