import React from "react";
import Details from "./details";
import HeroSection from "./hero";
import ContactUs from "./contact-us";

function ContactPage() {
  return (
    <main className="flex flex-col gap-16 md:gap-20 lg:gap-24 pt-16 md:pt-20 lg:pt-24 px-6 md:px-4">
      <HeroSection />
      <Details />
      <ContactUs />
    </main>
  );
}

export default ContactPage;
