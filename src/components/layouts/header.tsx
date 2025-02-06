"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/links";

function Header() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  React.useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 duration-500 border-b lg:border-none border-neutral-200",
        isVisible ? "translate-y-0 bg-white" : "-translate-y-full",
        lastScrollY > 100 && "bg-white"
      )}
    >
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between py-3 px-6 md:px-4"
        )}
      >
        <Link onClick={() => setIsMobileOpen(false)} href="/">
          <Image
            className="h-12"
            src="/images/icons/compact-logo.svg"
            width={200}
            height={80}
            alt="Coderbrix Logo"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li
              className={cn(
                "overflow-hidden",
                pathname === link.name && "text-primary"
              )}
              key={link.path}
            >
              <Link
                className="relative group text-lg overflow-hidden"
                href={link.path}
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-primary">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <Link
            className="hidden lg:block py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white"
            href="https://calendly.com/coderbrix"
            target="_blank"
          >
            Schedule a Call
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "lg:hidden h-[calc(100vh-6rem)] flex flex-col gap-12 overflow-y-auto duration-300",
          isMobileOpen ? "flex" : "hidden"
        )}
      >
        <ul className="flex flex-col px-6 py-4 border-t overflow-hidden">
          {navLinks.map((link) => (
            <li
              className={cn(
                "my-2 overflow-hidden",
                pathname === link.path && "text-primary"
              )}
              key={link.path}
              onClick={() => setIsMobileOpen(false)}
            >
              <Link
                className="relative group text-lg overflow-hidden"
                href={link.path}
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-primary">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 px-6 py-8">
          <Link
            onClick={() => setIsMobileOpen(false)}
            className="w-full block py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white"
            href="https://calendly.com/coderbrix"
          >
            Schedule a Call
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="w-full py-2.5 px-5 rounded-full border font-manrope text-base text-neutral-700"
          >
            <span className="">Contact Us</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
