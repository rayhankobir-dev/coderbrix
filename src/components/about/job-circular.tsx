import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import React from "react";

function JobCard() {
  return (
    <article className="flex flex-col items-start justify-between gap-5 p-5 border rounded-xl">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <BriefcaseBusiness size={28} />
          <h1 className="font-medium text-base md:text-xl lg:text-2xl">
            Senior Software Engineer
          </h1>
        </div>

        <ul className="flex gap-2.5">
          <li>Rmote</li>
          <li>Full time</li>
        </ul>
      </div>

      <div className="flex flex-col items-end justify-between gap-4">
        <h2 className="font-manrope font-medium text-sm md:text-lg lg:text-xl">
          $ 60K - 100K / Year Apply Now
        </h2>
        <button className="w-full md:w-fit py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white">
          Apply Now
        </button>
      </div>
    </article>
  );
}

function JobCircular() {
  return (
    <section className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 px-6 md:px-4">
      <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center mb-14 md:mb-16 lg:mb-20">
        Current job openings
      </h1>

      <div className="max-w-3xl flex flex-col gap-5 mx-auto">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>

      <button className="w-fit flex items-center gap-2.5 py-2.5 px-5 mx-auto mt-10 rounded-full bg-primary/90 font-manrope text-base text-white">
        View all
        <ArrowUpRight size={18} />
      </button>
    </section>
  );
}

export default JobCircular;
