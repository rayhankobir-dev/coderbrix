/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import NewsLetter from "@/components/home/news-letter";
import { ArrowUpRight, Calendar, Timer } from "lucide-react";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    title: "Effectively Integrating and Machine Learning in Your Organization",
    image:
      "https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b0ee264a049df93a1d1e_image-4.webp",
    category: "Category",
    author: "Coderbrix",
    date: "Jan 1, 2023",
  },
  {
    title: "Effectively Integrating and Machine Learning in Your Organization",
    image:
      "https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b149de22bcecff8b2a71_image-5.webp",
    category: "Category",
    author: "Coderbrix",
    date: "Jan 1, 2023",
  },
  {
    title: "Effectively Integrating and Machine Learning in Your Organization",
    image:
      "https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b176f0694f8a0b4bf5aa_image-6.webp",
    category: "Category",
    author: "Coderbrix",
    date: "Jan 1, 2023",
  },
  {
    title: "Effectively Integrating and Machine Learning in Your Organization",
    image:
      "https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b1ded2d3bd0a46449ff8_image-8.webp",
    category: "Category",
    author: "Coderbrix",
    date: "Jan 1, 2023",
  },
  {
    title: "Effectively Integrating and Machine Learning in Your Organization",
    image:
      "https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b18ce3d20c0de41241ef_image-7.webp",
    category: "Category",
    author: "Coderbrix",
    date: "Jan 1, 2023",
  },
  {
    title: "Effectively Integrating and Machine Learning in Your Organization",
    image:
      "https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b230022685bac3a1d749_image-1-p-800.webp",
    category: "Category",
    author: "Coderbrix",
    date: "Jan 1, 2023",
  },
];

function BlogCard({ blog }: any) {
  return (
    <article className="flex flex-col gap-5">
      <div className="rounded-xl overflow-hidden">
        <img
          className="aspect-video lg:aspect-square object-cover hover:scale-110 duration-300 overflow-hidden"
          src={blog.image}
          alt={blog.title}
        />
      </div>
      <div className="flex flex-col justify-between gap-2.5">
        <div className="flex items-center gap-5 uppercase text-xs md:text-sm">
          <p>{blog.date}</p>
          <h3>{blog.category}</h3>
        </div>

        <h1 className="font-medium text-base md:text-lg lg:text-xl">
          {blog.title}
        </h1>

        <div className="flex items-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="/images/icons/coderbrix.png"
            alt="coderbrix"
          />
          <h2 className="font-medium text-xl">{blog.author}</h2>
        </div>
      </div>
    </article>
  );
}

function BlogsPage() {
  return (
    <main className="px-6 md:px-4">
      <section className="w-full h-fit py-16 md:py-20 lg:py-28 overflow-hidden">
        <h1 className="flex flex-col items-center justify-center font-title font-medium text-4xl md:text-5xl lg:text-7xl">
          <span>Our blogs</span>
          <span className="font-uncut font-medium">and resources.</span>
        </h1>
      </section>

      <section className="max-w-6xl grid md:grid-cols-2 mx-auto border rounded-2xl overflow-hidden">
        <div className="order-2 md:order-1 flex flex-col justify-between gap-12 p-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <p className="inline-flex items-center gap-1.5">
                <Calendar size={18} />
                August 25, 2024
              </p>
              <p className="inline-flex items-center gap-1.5">
                <Timer size={18} /> 8 min read
              </p>
            </div>

            <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl">
              Enhancing candidate experience with Overix ATS: best practices.
            </h1>

            <p className="font-manrope text-sm md:text-base lg:text-lg">
              The spaces we inhabi shape When you spend more than 30 hours a
              week in one place with the same haveing articles onto people
            </p>
          </div>

          <Link
            className="w-fit flex items-center gap-2 text-base md:text-lg rounded-full"
            href="/view"
          >
            Learn More
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="order-1 md:order-2 overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-300"
            src="https://cdn.prod.website-files.com/66c489368c0d3bbdd7524b5e/66c7c1bfc9dafde87ed6ae9c_Rectangle%2034625766-p-1080.png"
            alt="Blog"
          />
        </div>
      </section>

      <section className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 mx-auto mt-24 px-6 md:px-4">
        <h1 className="flex flex-col font-medium text-4xl md:text-5xl lg:text-6xl">
          <span className="font-title">Our resources</span>
          <span className="font-uncut">and insights.</span>
        </h1>

        <div className="flex items-center gap-2 font-medium">
          <button className="py-2.5 px-5 rounded-full bg-black font-manrope text-sm text-white uppercase">
            Design
          </button>

          <button className="py-2.5 px-5 rounded-full bg-black/10 font-manrope text-sm text-black/70 uppercase">
            Marketing
          </button>

          <button className="py-2.5 px-5 rounded-full bg-black/10 font-manrope text-sm text-black/70 uppercase">
            Developer
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 py-5 border-y border-dashed">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>

        <button className="w-fit flex items-center gap-2.5 py-2.5 px-5 mx-auto mt-10 rounded-full font-medium font-manrope text-base text-primary border-2 border-primary">
          Load more
          <ArrowUpRight size={18} />
        </button>
      </section>

      <NewsLetter />
    </main>
  );
}

export default BlogsPage;
