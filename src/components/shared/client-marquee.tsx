import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const companies = [
  {
    name: "Silent Eye",
    img: "/images/companies/silent-eye.svg",
  },
  {
    name: "Brac",
    img: "/images/companies/brac.png",
  },
  {
    name: "PNG Tree",
    img: "/images/companies/pngtree.svg",
  },
  {
    name: "Asha",
    img: "/images/companies/asha.png",
  },
];

function ClientsMarquee({ className = "" }) {
  return (
    <div
      className={cn(
        "relative flex h-fit w-full flex-col items-center justify-center mb-24 overflow-hidden rounded-lg bg-background",
        className
      )}
    >
      <h2 className="font-manrope text-base md:text-lg lg:text-xl mb-12 md:mb-10">
        Trusted by some of the biggest brands
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {companies.map((review, index) => (
          <Image
            key={index}
            src={review.img}
            alt={review.name}
            className="h-16 w-auto ml-5"
            height={200}
            width={200}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default ClientsMarquee;
