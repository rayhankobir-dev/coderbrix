import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogGrid from "./blog-grid";
import { blogs } from "@/constants/blogs";
import NewsLetter from "@/components/shared/news-letter";
import { ArrowUpRight, Calendar, Timer } from "lucide-react";

function BlogsPage() {
  return (
    <main className="">
      <section className="w-full h-fit py-16 md:py-20 lg:py-28 px-6 md:px-4 overflow-hidden">
        <h1 className="flex flex-col items-center justify-center font-title font-medium text-5xl md:text-5xl lg:text-7xl">
          <span>Our blogs</span>
          <span className="font-uncut font-medium tracking-tighter">
            and resources.
          </span>
        </h1>
      </section>

      <section className="px-6 md:px-4">
        <article className="max-w-6xl grid md:grid-cols-2 mx-auto border rounded-2xl overflow-hidden">
          <div className="order-2 md:order-1 flex flex-col justify-between gap-12 p-4 md:p-6 lg:p-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 text-sm md:text-base">
                <p className="inline-flex items-center gap-1.5">
                  <Calendar size={18} />
                  {blogs[0].date}
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <Timer size={18} /> 8 min read
                </p>
              </div>

              <h1 className="font-medium font-uncut tracking-tight text-2xl md:text-4xl lg:text-5xl">
                {blogs[0].title}
              </h1>

              <p className="font-manrope text-sm md:text-base lg:text-lg">
                {blogs[0].description}
              </p>
            </div>

            <Link
              className="w-fit flex items-center gap-2 text-base md:text-lg rounded-full"
              href={`/blogs/${blogs[0].slug}`}
            >
              Learn More
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="order-1 md:order-2 overflow-hidden">
            <Image
              className="w-full h-full object-cover hover:scale-110 duration-300"
              src={blogs[0].image}
              alt={blogs[0].title}
              width={1200}
              height={800}
            />
          </div>
        </article>
      </section>

      <BlogGrid />

      <NewsLetter />
    </main>
  );
}

export default BlogsPage;
