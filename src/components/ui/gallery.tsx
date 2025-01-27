"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface GalleryProps {
  items: GalleryItem[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Gallery: React.FC<GalleryProps> = ({
  items,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2.5 md:gap-3 w-full mx-auto rounded-md">
      {items.slice(0, 11).map((item, index) => (
        <motion.div
          key={item.id}
          className={cn(
            "relative rounded-2xl overflow-hidden aspect-square h-[350px] md:h-[450px] lg:h-[500px] flex-shrink-0 object-cover ease-in-out duration-300",
            currentIndex === index
              ? "w-100% md:w-[60%] lg:w-[60%]"
              : "xl:w-[20%] md:w-[20%] sm:w-[100%] w-[100%]"
          )}
          onMouseEnter={() => setCurrentIndex(index)}
          onMouseLeave={() => setCurrentIndex(index)}
          onClick={() => setCurrentIndex(index)}
          layoutId={item.id}
        >
          <motion.img
            src={item.url}
            alt={item.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <motion.div
            className={cn(
              "absolute h-full w-full bg-gradient-to-b from-transparent to-black/80 opacity-100 md:opacity-0 duration-500",
              currentIndex === index && "md:opacity-100"
            )}
          >
            <div
              className={cn(
                "h-full flex flex-col items-center justify-end gap-2.5 p-6 translate-x-0 md:-translate-x-full text-white ease-in-out duration-500",
                currentIndex === index && "md:translate-x-0"
              )}
            >
              <h1 className="text-4xl font-semibold">
                “Simplifies schedule reducing”
              </h1>
              <p className="text-lg">
                Unlocking the power of automation in recruitment
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Responsive Website Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptas laborum excepturi, ipsum repudiandae nesciunt ratione doloremque beatae cum velit neque dignissimos ab distinctio, mollitia error praesentium qui odit autem.",
    url: "https://cdn.prod.website-files.com/6735edbc3f73bc3fd0c25a76/676aef06de70d0f2fd98e5bd_image%20(21).avif",
  },
  {
    id: "2",
    title: "Responsive Website Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptas laborum excepturi, ipsum repudiandae nesciunt ratione doloremque beatae cum velit neque dignissimos ab distinctio, mollitia error praesentium qui odit autem.",
    url: "https://cdn.prod.website-files.com/6735edbc3f73bc3fd0c25a76/67683527319c57a007638722_slider%203.webp",
  },
  {
    id: "3",
    title: "Responsive Website Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptas laborum excepturi, ipsum repudiandae nesciunt ratione doloremque beatae cum velit neque dignissimos ab distinctio, mollitia error praesentium qui odit autem.",
    url: "https://cdn.prod.website-files.com/6735edbc3f73bc3fd0c25a76/67683501f5037266b15d4b71_slider%202.webp",
  },
];

const GalleryPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-4">
      <h1 className="max-w-md font-medium text-4xl md:text-5xl mb-10">
        <span className="font-title">Set policies that</span>{" "}
        <span className="font-uncut tracking-tighter">enforce themselves.</span>
      </h1>
      <Gallery
        items={galleryItems}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
};

export default GalleryPage;
