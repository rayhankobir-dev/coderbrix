import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="relative py-24">
      <Image
        className="absolute top-0 left-0 w-full h-auto"
        src="/images/vectors/top-grid.svg"
        alt="top grid"
        height={800}
        width={1200}
      />

      <div className="relative max-w-2xl flex flex-col items-center justify-between gap-8 mx-auto">
        <h1 className="max-w-xl font-semibold text-5xl text-primary">
          About Coderbrix
        </h1>
        <p className="font-manrope text-xl text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          voluptas laborum excepturi, ipsum repudiandae nesciunt ratione
          doloremque beatae cum velit neque dignissimos ab distinctio, mollitia
          error praesentium qui odit autem.
        </p>
      </div>
    </section>
  );
}

export default About;
