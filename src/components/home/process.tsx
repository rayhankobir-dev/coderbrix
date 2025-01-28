/* eslint-disable @next/next/no-img-element */
"use client";
import { JSX } from "react";
import { ReactLenis } from "lenis/react";
import { ShieldCheck } from "lucide-react";

export default function Demo(): JSX.Element {
  return (
    <ReactLenis root>
      <section className="max-w-6xl mx-auto px-6 md:px-4">
        <h1 className="max-w-2xl mx-auto text-center py-24 font-medium text-4xl md:text-5xl lg:text-6xl">
          <span className="font-title">Our working process</span> <br />
          <span className="font-uncut tracking-tighter">Fast convert</span>
        </h1>
        <div className="grid md:grid-cols-2 items-start mb-20">
          <div className="sticky top-5 h-screen flex flex-col justify-start gap-4 pr-12">
            <div className="space-y-4">
              <h2 className="font-medium font-uncut tracking-tight text-3xl">
                The large scale benefits of Primex
              </h2>
              <p className="text-lg">
                Concentrate on leads that have been thoroughly verified and are
                ready to be converted into loyal customers, ensuring a higher
                success rate.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <ShieldCheck className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have
                    been thoroughly verified and are ready to be converted into.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have.
                  </p>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have.
                  </p>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have.
                  </p>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Increased conversion rate
                  </h3>
                  <p className="text-base">
                    Increased conversion rate by focusing on leads that have.
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <div className="relative rounded-xl overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src="/images/bg/green-strip-bg.png"
                alt="bg"
              />
              <div className="relative h-full w-full flex flex-col items-center justify-center gap-10 px-10 py-20 bg-primary/30">
                <h1 className="font-medium text-5xl text-white text-tracking-tighter">
                  The large scale benefits of Coderbrix
                </h1>
                <p className="text-lg text-white">
                  Concentrate on leads that have been thoroughly verified and
                  are ready to be converted into loyal customers, ensuring a
                  higher success rate.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full scale-125"
                src="/images/bg/blue-strip-bg.png"
                alt="bg"
              />
              <div className="relative h-full w-full flex flex-col items-center justify-center gap-10 px-10 py-20">
                <h1 className="font-medium text-5xl text-white text-tracking-tighter">
                  The large scale benefits of Coderbrix
                </h1>
                <p className="text-lg text-white">
                  Concentrate on leads that have been thoroughly verified and
                  are ready to be converted into loyal customers, ensuring a
                  higher success rate.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src="/images/bg/purple-strip-bg.png"
                alt="bg"
              />
              <div className="relative h-full w-full flex flex-col items-center justify-center gap-10 px-10 py-20 bg-purple-800/30">
                <h1 className="font-medium text-5xl text-white text-tracking-tighter">
                  The large scale benefits of Coderbrix
                </h1>
                <p className="text-lg text-white">
                  Concentrate on leads that have been thoroughly verified and
                  are ready to be converted into loyal customers, ensuring a
                  higher success rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
