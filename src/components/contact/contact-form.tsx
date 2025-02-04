"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const demoData = {
      firstName: "Rayhan",
      lastName: "Kobir",
      email: "rayhankobir793@gmail.com",
      phone: "01704355097",
      country: "Bangladesh",
      message: "Testing",
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxU3BI8B8l5GUODsqk1vtNlja3nVq4AmCQ7t8zry3bChhNT9YIwPifDNJK-eTHn3cmu_w/exec",
        {
          method: "POST", // Make sure it's POST
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
          body: JSON.stringify(demoData), // Send the data as a JSON string
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="grid grid-cols-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Surname"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <input
        type="text"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
