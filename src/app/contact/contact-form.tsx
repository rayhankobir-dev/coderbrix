"use client";
import toast from "react-hot-toast";
import React, { useState } from "react";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: String(process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY),
        }),
      });

      await fetch(String(process.env.NEXT_PUBLIC_CONTACT_API_URL), {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `First_Name=${formData.firstName}&Last_Name=${formData.lastName}&Email=${formData.email}&Phone=${formData.phone}&Country=${formData.country}&Message=${formData.message}`,
      });
      toast.success("We will get back to you soon!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch {
      toast.error("Failed to sent, please try again later!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass =
    "block text-[15px] md:text-base font-medium text-[#222222] leading-[17.6px]";
  const inputClass =
    "inputsshadow h-[42px] w-full border border-[#DDDDDD] rounded-lg px-3 md:px-4 bg-[#DDDDDD] bg-opacity-25 text-sm md:text-base font-normal text-[#222222] placeholder:text-opacity-50 outline-none";

  return (
    <form
      className="contactusboxDropshadow border border-[#DDDDDD] rounded-2xl p-4 md:p-6 flex flex-col gap-3 md:gap-6 h-full"
      onSubmit={handleSubmit}
    >
      <h2 className="py-3 md:py-1 font-uncut text-2xl md:text-[32px] font-semibold leading-[26.4px] md:leading-[35.2px] text-[#101828] text-center">
        We are Happy To Help!
      </h2>

      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {/* First Name Input */}
        <div className="space-y-2">
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            required
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>

        {/* Last Name Input */}
        <div className="space-y-2">
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            required
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>

        {/* Contact Number Input */}
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>
            Contact Number
          </label>
          <input
            required
            type="text"
            id="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Subject Input */}
      <div className="space-y-2">
        <label htmlFor="country" className={labelClass}>
          Country
        </label>
        <input
          required
          type="text"
          id="country"
          placeholder="Your Country"
          value={formData.country}
          onChange={handleChange}
          className={inputClass}
          disabled={isSubmitting}
        />
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="inputsshadow w-full border border-[#DDDDDD] h-[65px] md:h-[78px] rounded-lg py-[10px] md:py-3 px-3 md:px-4 bg-[#DDDDDD] bg-opacity-25 placeholder:text-opacity-50 text-sm md:text-base font-medium text-[#222222] outline-none"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="md:h-12 md:min-w-[209px] bg-primary flex items-center gap-3 rounded-full py-2 md:py-3 px-5 md:px-5 shadow text-lg font-medium text-white"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <svg
            className="h-6 w-6"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 12.5001C2.5 12.0087 2.5053 11.0172 2.5158 10.5244C2.5811 7.45886 2.6138 5.92609 3.7449 4.79066C4.8761 3.65523 6.4503 3.61568 9.5988 3.53657C11.5393 3.48781 13.4607 3.48781 15.4012 3.53656C18.5497 3.61566 20.1239 3.65521 21.255 4.79065C22.3862 5.92608 22.4189 7.45885 22.4842 10.5244C22.5053 11.5101 22.5052 12.4899 22.4842 13.4756C22.4189 16.5412 22.3862 18.0739 21.255 19.2094C20.1239 20.3448 18.5497 20.3843 15.4012 20.4634C14.5984 20.4836 13.7989 20.4954 13 20.4989"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 8.5L14.558 10.2394C12.8428 11.2535 12.1572 11.2535 10.442 10.2394L7.5 8.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 17.5H2.5M10.5 17.5C10.5 16.7998 8.5057 15.4915 8 15M10.5 17.5C10.5 18.2002 8.5057 19.5085 8 20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
