/* eslint-disable @next/next/no-img-element */
"use client";
import { JSX } from "react";
import { ReactLenis } from "lenis/react";

export default function Demo(): JSX.Element {
  return (
    <ReactLenis root>
      <section className="w-full">
        <div className="grid grid-cols-2">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
            <h2 className="font-uncut tracking-tighter text-3xl">
              The large scale benefits of Primex
            </h2>
            <p className="text-lg">
              Concentrate on leads that have been thoroughly verified and are
              ready to be converted into loyal customers, ensuring a higher
              success rate.
            </p>

            <img
              src="/images/vectors/globe.svg"
              alt="globe"
              className="mb-20"
            />
          </div>

          <div className="grid gap-2">
            <img
              src="https://cdn.prod.website-files.com/6735edbc3f73bc3fd0c25a76/676846fb25a33401d6d27c9b_Group%201000020749%20(1).svg"
              alt="globe"
              className="mb-5"
            />
            <img
              src="https://cdn.prod.website-files.com/6735edbc3f73bc3fd0c25a76/67366ecd49b99ccd0c32dacf_Group%201000020784.svg"
              alt="globe"
              className="mb-5"
            />
            <img
              src="https://cdn.prod.website-files.com/6735edbc3f73bc3fd0c25a76/67366ecd6ddad971db673fb7_Group%201000020785.svg"
              alt="globe"
              className="mb-5"
            />
            <img src="/images/vectors/globe.svg" alt="globe" className="mb-5" />
            <img src="/images/vectors/globe.svg" alt="globe" className="mb-5" />

            <img src="/images/vectors/globe.svg" alt="globe" className="mb-5" />

            <img src="/images/vectors/globe.svg" alt="globe" className="mb-5" />

            <img src="/images/vectors/globe.svg" alt="globe" className="mb-5" />
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
