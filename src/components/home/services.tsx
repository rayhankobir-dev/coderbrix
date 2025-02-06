import React from "react";
import Image from "next/image";
import { services } from "@/constants/services";

function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-4">
      <h1 className="max-w-2xl mx-auto text-center py-16 md:py-20 lg:py-24 font-medium text-4xl md:text-5xl lg:text-6xl">
        <span className="font-title">Explore our services</span> <br />
        <span className="font-uncut font-medium tracking-tighter">
          That suits for you
        </span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <article
            className="p-6 space-y-3 hover:bg-primary/5 border rounded-xl duration-300"
            key={service.id}
          >
            <h1 className="font-medium font-uncut tracking-tight text-2xl">
              {service.title}
            </h1>
            <Image
              className="w-14"
              src={service.icon}
              alt={service.title}
              width={500}
              height={500}
            />
            <p className="font-light text-lg">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
