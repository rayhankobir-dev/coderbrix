import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CheckCircle, Mail, Star } from "lucide-react";

function NewsLetter() {
  return (
    <section
      className={cn(
        "relative w-full max-w-6xl h-fit mx-auto rounded-none md:rounded-2xl lg:rounded-3xl overflow-hidden"
      )}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/bg/green-strip-bg.png"
        alt="Coderbrix news letter"
        width={1200}
        height={800}
      />

      <div className="relative w-full h-full flex flex-col items-center justify-between gap-8 px-6 py-12 md:py-20 lg:py-36 bg-primary/50">
        <h1 className="max-w-3xl font-title font-medium text-4xl md:text-5xl lg:text-7xl text-white text-center">
          <span>Driving clients and</span>
          <span className="font-uncut font-medium tracking-tighter">
            {" "}
            succes for you.
          </span>
        </h1>
        <form className="flex items-center px-1 py-1 bg-primary/20 backdrop-blur-xl backdrop-brightness-20 rounded-full border border-dashed border-white border-opacity-30 overflow-hidden">
          <Mail size={20} className="w-8 h-8 ml-2.5 text-white" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-2.5 py-2 bg-transparent text-base text-white placeholder:text-white focus:outline-none"
          />
          <button className="w-fit py-2.5 px-5 rounded-full font-manrope font-medium text-base bg-white text-primary/80">
            Subscribe
          </button>
        </form>

        <div className="flex items-center divide-x">
          <div className="flex items-center gap-1.5 px-2.5 text-white opacity-80">
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
          </div>
          <div className="flex items-center gap-2.5 px-2.5 text-white opacity-80">
            <CheckCircle size={16} />
            <p className="text-sm">Fast, no matter what!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
