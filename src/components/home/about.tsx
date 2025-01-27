/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function About() {
  return (
    <section className="hidden py-24">
      <div className="w-fit flex items-center gap-5 mx-auto">
        <img src="/images/vectors/line.svg" alt="line" />
        <div className="flex items-center font-semibold text-5xl text-primary">
          <img
            className="h-12"
            src="https://www.coderbrix.com/coderbrix.svg"
            alt="Coderbrix Logo"
          />
        </div>
        <img className="rotate-180" src="/images/vectors/line.svg" alt="line" />
      </div>

      <div className="max-w-xl mx-auto py-5">
        <h3 className="font-semibold text-4xl text-primary text-center mb-5">
          Message from Coderbrix
        </h3>
        <p className="font-manrope text-base text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          voluptas laborum excepturi, ipsum repudiandae nesciunt ratione
          doloremque beatae cum velit neque dignissimos ab distinctio, mollitia
          error praesentium qui odit autem.
        </p>
      </div>
    </section>
  );
}
