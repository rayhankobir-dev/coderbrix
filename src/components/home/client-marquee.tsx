/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Marquee } from "../ui/marquee";

const companies = [
  {
    name: "Vivasoft",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZglXWLWZAJqkv8TUJv3apeTX0dAMuN1uZlg&s",
  },
  {
    name: "Coderbrix",
    img: "https://www.coderbrix.com/coderbrix.svg",
  },
  {
    name: "Brainstation",
    img: "https://pbs.twimg.com/profile_images/909637476519518208/ZBxCO_OE_400x400.jpg",
  },
  {
    name: "Technonext",
    img: "https://media.licdn.com/dms/image/v2/D560BAQFTYpdpH-voMQ/company-logo_400_400/company-logo_400_400/0/1730194455789?e=2147483647&v=beta&t=WcQ0pq5wOZ5c9ICmE64MXXCssK16h2O2zdzvnyfXVG8",
  },
  {
    name: "WellDev",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZJDnfA9dnmPj-dcf0wBRm0QCpTIH93tcMw&s",
  },
  {
    name: "Grammenphone",
    img: "https://1000logos.net/wp-content/uploads/2023/03/Grameenphone-logo.png",
  },
];

function ClientsMarquee() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center mb-24 overflow-hidden rounded-lg bg-background">
      <h2 className="font-manrope text-base md:text-lg lg:text-xl mb-12 md:mb-10">
        Trusted by some of the biggest brands
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {companies.map((review, index) => (
          <img
            key={index}
            src={review.img}
            alt={review.name}
            className="h-16"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default ClientsMarquee;
