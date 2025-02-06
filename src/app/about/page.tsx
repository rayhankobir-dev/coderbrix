/* eslint-disable @next/next/no-img-element */
import React from "react";
import Cta from "@/components/shared/cta";
import { ArrowUpRight } from "lucide-react";
import ClientsMarquee from "@/components/shared/client-marquee";
import Link from "next/link";

function AboutPage() {
  return (
    <main>
      <section className="max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mx-auto py-16 md:py-20 lg:py-24 px-6 md:px-4">
        <h1 className="max-w-md font-medium font-uncut tracking-tighter text-4xl md:text-4xl lg:text-5xl md:text-left text-center">
          Coderbrix is a Software Agency that provides customize software
          solutions.
        </h1>

        <div className="max-w-lg flex flex-col items-center gap-8">
          <h5 className="font-manrope text-lg lg:text-xl text-center text-neutral-700">
            We always work on developing feature-rich customize solutions so
            your business can be constant with the evolving trends in the
            eCommerce industry.
          </h5>
          <Link
            href="/contact"
            className="w-fit flex items-center gap-2 py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="h-[50vh] md:h-[70vh] max-w-6xl flex flex-col md:flex-row justify-between gap-3 md:gap-5 lg:gap-8 mx-auto px-6 md:px-4 overflow-hidden">
        <img
          className="h-full w-auto object-cover rounded-xl"
          src="/images/working.webp"
          alt="working"
        />
        <img
          className="hidden md:block h-full w-full rounded-xl overflow-hidden aspect-video object-cover object-center"
          src="/images/team.webp"
          alt="Team"
        />
      </section>

      <section className="max-w-6xl grid md:grid-cols-2 items-center py-10 md:py-14 lg:py-20 px-6 md:px-4 mx-auto md:divide-x">
        <div className="grid grid-cols-2 divide-x">
          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              15+
            </h1>
            <h2 className="font-medium text-sm md:text-base uppercase">
              Skilled Developer
            </h2>
          </div>

          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              50+
            </h1>
            <h2 className="font-medium text-sm lg:text-base uppercase">
              Project Developed
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x">
          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              200+
            </h1>
            <h2 className="font-medium text-sm lg:text-base uppercase">
              Businesses Empowered
            </h2>
          </div>

          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              100%
            </h1>
            <h2 className="font-medium text-sm lg:text-base uppercase">
              Satisfied Customers
            </h2>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-24">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 mx-auto px-6 md:px-4 mb-16">
          <h1 className="max-w-xl font-semibold text-4xl md:text-5xl text-center md:text-left">
            Elevate your businesses with our digital services
          </h1>

          <Link
            href="/contact"
            className="flex items-center gap-2 py-2.5 px-5 rounded-full bg-primary text-white font-manrope"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <img src="/images/vectors/globe.svg" alt="globe" />
      </section>
      <Cta />
      <ClientsMarquee className="mt-24" />
    </main>
  );
}

export default AboutPage;
