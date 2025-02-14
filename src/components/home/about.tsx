import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24">
      <div className="w-fit flex items-center gap-5 mx-auto">
        <Image
          src="/images/vectors/line.svg"
          alt="line"
          width={1200}
          height={800}
        />
        <div className="flex items-center font-semibold text-5xl text-primary">
          <Image
            className="h-12 w-auto"
            src="https://www.coderbrix.com/coderbrix.svg"
            alt="Coderbrix Logo"
            width={200}
            height={100}
          />
        </div>
        <Image
          src="/images/vectors/line.svg"
          alt="line"
          width={1200}
          height={800}
        />
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
