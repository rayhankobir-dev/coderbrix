import React from "react";
import Image from "next/image";
import ContactForm from "./contact-form";

function ContactUs() {
  return (
    <section className="py-5">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="h-full w-full flex flex-col gap-6">
          <div className="flex items-center flex-col gap-3">
            <h2 className="font-uncut text-2xl md:text-[32px] font-semibold leading-[26.4px] md:leading-[35.2px] text-[#101828] text-center">
              We&apos;d love to hear from you
            </h2>
            <p className="text-sm md:text-xl opacity-60 font-normal leading-[18.2px] md:leading-[26px] text-[#222222] text-center">
              Whether you have a question about features, trials, pricing, need
              a demo, or anything else, our team is ready to answer all your
              questions
            </p>
          </div>
          <Image
            src="/images/contact-us.png"
            alt="contact-us"
            className="w-full object-cover bg-center bg-cover rounded-2xl h-[320px] md:h-full"
            width={800}
            height={800}
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactUs;
