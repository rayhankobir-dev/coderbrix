/* eslint-disable @next/next/no-img-element */
import React from "react";
import Cta from "@/components/home/cta";
import { ArrowUpRight } from "lucide-react";
import JobCircular from "@/components/about/job-circular";

function AboutPage() {
  return (
    <main>
      <section className="max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mx-auto py-16 md:py-20 lg:py-24 px-6 md:px-4">
        <h1 className="max-w-md font-medium font-uncut tracking-tighter text-4xl md:text-4xl lg:text-5xl md:text-left text-center">
          Consecur some growth in product management.
        </h1>

        <div className="max-w-lg flex flex-col items-center gap-8">
          <h5 className="font-manrope text-lg lg:text-xl text-center text-neutral-700">
            I will help Websites into Highlight Product features & convert
            visitors digitise on molestie haveing power forward into Potential.
          </h5>
          <button className="w-fit flex items-center gap-2 py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white">
            Get in touch
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <section className="h-[50vh] md:h-[70vh] max-w-6xl flex flex-col md:flex-row justify-between gap-3 md:gap-5 lg:gap-8 mx-auto px-6 md:px-4 overflow-hidden">
        <img
          className="h-full w-auto object-cover rounded-xl"
          src="https://cdn.prod.website-files.com/66c4879ab052a66c08e0934f/66cb1da1b170c5ecce9e2962_Rectangle%2034625353.avif"
          alt="working"
        />
        <img
          className="hidden md:block h-full w-full rounded-xl overflow-hidden aspect-video object-cover object-center"
          src="https://cdn.prod.website-files.com/66c4879ab052a66c08e0934f/66cb1da0c09bb5829035f314_Rectangle%2034625354.avif"
          alt="Team"
        />
      </section>

      <section className="max-w-6xl grid md:grid-cols-2 items-center py-10 md:py-14 lg:py-20 px-6 md:px-4 mx-auto md:divide-x">
        <div className="grid grid-cols-2 divide-x">
          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              130%
            </h1>
            <h2 className="font-medium text-sm md:text-base uppercase">
              Apps Integrations
            </h2>
          </div>

          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              130%
            </h1>
            <h2 className="font-medium text-sm lg:text-base uppercase">
              Apps Integrations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x">
          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              130%
            </h1>
            <h2 className="font-medium text-sm lg:text-base uppercase">
              Apps Integrations
            </h2>
          </div>

          <div className="space-y-2 p-3 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              130%
            </h1>
            <h2 className="font-medium text-sm lg:text-base uppercase">
              Apps Integrations
            </h2>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-24">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 mx-auto px-6 md:px-4 mb-16">
          <h1 className="max-w-xl font-semibold text-4xl md:text-5xl text-center md:text-left">
            Unblock leneck Scheduling queues
          </h1>

          <button className="flex items-center gap-2 py-2.5 px-5 rounded-full bg-primary text-white font-manrope">
            Get in touch
            <ArrowUpRight size={18} />
          </button>
        </div>
        <img src="/images/vectors/globe.svg" alt="globe" />
      </section>
      <JobCircular />
      <Cta />
      <section className="relative py-24">
        <img
          className="absolute top-0 left-0"
          src="/images/vectors/top-grid.svg"
          alt="top grid"
        />

        <div className="relative max-w-2xl flex flex-col items-center justify-between gap-8 mx-auto">
          <h1 className="max-w-xl font-semibold text-5xl text-primary">
            About Coderbrix
          </h1>
          <p className="font-manrope text-xl text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            voluptas laborum excepturi, ipsum repudiandae nesciunt ratione
            doloremque beatae cum velit neque dignissimos ab distinctio,
            mollitia error praesentium qui odit autem.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
