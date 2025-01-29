/* eslint-disable @next/next/no-img-element */
import React from "react";

const services = [
  {
    id: 1,
    title: "Staff Augmentation",
    description:
      "Expand your team and capabilities with experienced professionals.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/Palette.svg",
  },
  {
    id: 4,
    title: "UX/UI Design",
    description:
      "Ensuring quality and reliability in every step of your software lifecycle.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/happyEmoji.svg",
  },
  {
    id: 2,
    title: "Back-End Service",
    description: "Powering your digital solutions behind the scenes.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/display.svg",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Developing your mobile apps with ease.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/inbox.svg",
  },
  {
    id: 6,
    title: "Web Development",
    description:
      "Building dynamic, user-friendly websites tailored to your needs.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/display1.svg",
  },
  {
    id: 5,
    title: "Software Quality Assurance",
    description:
      "Ensuring quality and reliability in every step of your software lifecycle.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/happyEmoji.svg",
  },
  {
    id: 7,
    title: "Deployment & Monitoring",
    description: "Safeguarding your digital assets with advanced protection.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/eye.svg",
  },
  {
    id: 8,
    title: "Cloud Infrastructure",
    description: "Uncovering insights to create user-centered designs.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/eye.svg",
  },
  {
    id: 8,
    title: "Support & Consulting",
    description: "Turning your ideas into functional, market-ready products.",
    icon: "https://zaagsys.com/assets/Icons/developmentServices/Suitcase.svg",
  },
];

function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-4">
      <h1 className="max-w-2xl mx-auto text-center py-24 font-medium text-4xl md:text-5xl lg:text-6xl">
        <span className="font-title">Explore our services</span> <br />
        <span className="font-uncut tracking-tighter">That suits for you</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <article className="p-6 space-y-3 border rounded-xl" key={service.id}>
            <h1 className="font-medium font-uncut tracking-tight text-2xl">
              {service.title}
            </h1>
            <img className="w-14" src={service.icon} alt={service.title} />
            <p className="font-light text-lg">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
