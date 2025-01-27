/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <section className=" py-24 px-6 md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          <div className="col-span-1">
            <div className="grid grid-rows-2 gap-16">
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.fleekminds.com/_next/static/media/ic-expert.2a522938.svg"
                    />
                  </div>
                  <h2 className="mb-4 text-center text-2xl font-semibold">
                    Expert Developers
                  </h2>
                  <p className="font-manrope text-base text-center">
                    Our team of skilled professionals brings extensive
                    experience across a range of technologies, ensuring the best
                    solutions tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.fleekminds.com/_next/static/media/ic-deadlines.2a5cc8ad.svg"
                    />
                  </div>
                  <h2 className="mb-4 text-center text-2xl font-semibold">
                    We Always Meet Deadlines
                  </h2>
                  <p className="font-manrope text-base text-center">
                    Timely delivery is at the core of our service. We
                    consistently meet deadlines without sacrificing the quality
                    of our work.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-order-1 mt-12 lg:col-span-1 lg:mt-0">
            <div className="order-4 flex flex-col justify-center gap-10">
              <div className="text-left">
                <small className="mb-8 font-medium text-base lg:text-xl">
                  Why Choose Us?
                </small>
                <h2 className="font-semibold text-4xl lg:text-3xl text-primary">
                  Delivering Excellence with Tailored Solutions
                </h2>
              </div>
              <img
                alt="img"
                src="https://www.fleekminds.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpert.79f1d6fb.png&w=1080&q=75"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-rows-2 gap-16">
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.fleekminds.com/_next/static/media/ic-customer.d4dc30dc.svg"
                    />
                  </div>
                  <h2 className="mb-4 text-center text-2xl font-semibold">
                    Customer-Centric Approach
                  </h2>
                  <p className="font-manrope text-base text-center">
                    We prioritize understanding your unique needs, providing
                    customized solutions that align with your business goals and
                    drive results.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.fleekminds.com/_next/static/media/ic-expert.2a522938.svg"
                    />
                  </div>
                  <h2 className="mb-4 text-center text-2xl font-semibold">
                    Test-Driven Excellence
                  </h2>
                  <p className="font-manrope text-base text-center">
                    Our process includes rigorous testing to guarantee high
                    performance and quality, ensuring your projects are reliable
                    and robust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            className="flex items-center gap-3 rounded-full border-2 border-primary px-8 py-3 font-medium text-base text-primary transition-all duration-200"
            href="contact"
          >
            Hire The Best Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
