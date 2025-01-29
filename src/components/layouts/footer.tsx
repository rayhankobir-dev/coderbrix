/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-16 pt-16 border-t border-neutral-200">
      {/* <NewsLetter className="-translate-y-full" /> */}
      <section className="max-w-6xl flex flex-col gap-10 mx-auto px-6 md:px-4">
        <nav className="flex items-start justify-between">
          <div className="max-w-sm flex flex-col items-start gap-4">
            <img
              src="/images/icons/compact-logo.svg"
              alt="Coderbrix Logo"
              className="h-14"
            />

            <h5 className="text-lg">
              Coderbrix helps businesses to build and grow with versatile
              software solutions and services.
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
                className="h-12 flex items-center px-5 bg-primary/90 text-white text-lg rounded-md"
                href=""
              >
                Support Center
              </Link>
            </div>
          </div>

          <ul className="flex flex-col gap-2.5 text-lg">
            <li className="font-medium text-xl">Quick Links</li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <li className="font-medium text-xl">Social Handles</li>
          </ul>
        </nav>
        <p className="py-6 border-t font-uncut tracking-tight opacity-70 text-base text-center">
          &copy; 2022 Coderbrix. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
