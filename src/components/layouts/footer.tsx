/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Mail, MapPinnedIcon } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "",
  },
  {
    label: "Facebook",
    href: "",
  },
  {
    label: "Dribble",
    href: "",
  },
  {
    label: "Behance",
    href: "",
  },
];

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

function Footer() {
  return (
    <footer className="mt-16 pt-16 border-t border-neutral-200">
      <section className="max-w-6xl flex flex-col gap-10 mx-auto px-6 md:px-4">
        <nav className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="max-w-sm flex flex-col items-start gap-4">
            <img
              src="/images/icons/compact-logo.svg"
              alt="Coderbrix Logo"
              className="h-14"
            />

            <h5 className="text-lg">
              With our innovative solutions and dedicated expertise, success is
              a guaranteed outcome. Let&apos;s accelerate together towards your
              goals and beyond.🧘
            </h5>

            <div className="flex items-center gap-2.5 mt-6">
              <Link href="">
                <img
                  className="h-12"
                  src="/images/icons/codecynon.svg"
                  alt="Codecynon"
                />
              </Link>

              <Link
                className="h-12 flex items-center px-5 bg-primary/90 text-white text-base md:text-lg text-nowrap rounded-md"
                href=""
              >
                Support Center
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 md:gap-4">
            <ul className="col-span-2 lg:col-span-1 flex flex-col gap-2.5">
              <li className="font-medium text-xl mb-2">Quick Links</li>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href="/">{link.label}</Link>
                </li>
              ))}
            </ul>

            <ul className="col-span-2 lg:col-span-1 flex flex-col gap-2.5">
              <li className="font-medium text-xl mb-2">Follow Us</li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <ul className="col-span-4 lg:col-span-2 flex flex-col gap-2.5">
              <li className="font-medium text-xl mb-2">Contact Us</li>
              <div className="text-base space-y-2">
                <div className="inline-flex items-end gap-1.5">
                  <Mail size={18} className="min-w-fit" /> support@coderbrix.com
                </div>
                <div className="inline-flex items-start gap-1.5">
                  <MapPinnedIcon size={18} className="min-w-fit" />
                  Level 05, House 05, Road 12, Sector 1, Uttara Dhaka,
                  Bangladesh
                </div>

                <iframe
                  className="h-32 w-full rounded-xl overflow-hidden"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258.9460987405607!2d90.41283136963851!3d23.78117150984286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79e0344be53%3A0x122eee8514b17e47!2sLevel%205%2C%20House%2C%201A%20Rd%2016%2FA%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1738233091072!5m2!1sen!2sbd"
                  width="250"
                  height="250"
                  loading="lazy"
                ></iframe>
              </div>
            </ul>
          </div>
        </nav>
        <p className="py-5 border-t font-uncut tracking-tight opacity-70 text-base text-center">
          &copy; 2022 Coderbrix. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
