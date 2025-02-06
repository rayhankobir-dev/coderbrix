import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function Cta() {
  return (
    <section className="relative w-full h-fit py-20 md:py-36 mt-10 md:mt-14 lg:mt-20 bg-[#0c3721] overflow-hidden">
      <Image
        className="absolute top-0 left-0 w-full md:h-full object-cover md:object-left-top"
        src="/images/vectors/cta-section.svg"
        alt="cta section"
        width={1200}
        height={800}
      />

      <div className="relative max-w-4xl flex flex-col items-center justify-between gap-8 mx-auto px-6">
        <h1 className="font-medium text-3xl md:text-6xl lg:text-7xl text-white text-center">
          <span className="font-title md:text-nowrap">
            We develop software solutions.
          </span>{" "}
          <br />
          <span className="font-uncut tracking-tighter">
            That bring you success.
          </span>
        </h1>
        <p className="font-manrope text-base md:text-xl text-white text-center">
          From sparking ideas to driving growth, we guide you through every step
          of product development. Partner with a team truly dedicated to your
          success in conquering the market.
        </p>

        <Link
          href="/contact"
          className="flex items-center gap-2 py-2.5 px-6 mt-6 rounded-full bg-white font-manrope font-medium"
        >
          Hire Team
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default Cta;
