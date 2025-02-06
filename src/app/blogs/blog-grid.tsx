/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { blogCategories, blogs } from "@/constants/blogs";
import { AnimatePresence, motion } from "framer-motion";

function BlogCard({ blog }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="flex flex-col gap-5"
    >
      <div className="rounded-xl overflow-hidden">
        <Image
          className="aspect-video lg:aspect-square object-cover hover:scale-110 duration-300 overflow-hidden"
          src={blog.image}
          alt={blog.title}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between gap-2.5">
        <div className="flex items-center gap-5 uppercase text-xs md:text-sm">
          <p>{blog.date}</p>
          <h3>{blog.category}</h3>
        </div>
        <Link href={`/blogs/${blog.slug}`}>
          <h1 className="font-medium font-uncut tracking-tight text-base md:text-lg lg:text-xl">
            {blog.title}
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          <Image
            className="h-6 w-6 rounded-full"
            src="/images/icons/coderbrix.png"
            alt="coderbrix"
            width={100}
            height={100}
          />
          <h2 className="font-medium text-xl">{blog.author}</h2>
        </div>
      </div>
    </motion.div>
  );
}

function BlogGrid() {
  const [selected, setSelected] = React.useState(blogCategories[0]);
  const [blogsFiltered, setBlogsFiltered] = React.useState(
    blogs.filter((blog) => blog.category === selected.slug)
  );

  const handleClick = (category: any) => {
    const filteredBlogs = blogs.filter(
      (blog) => blog.category === category.slug
    );
    if (filteredBlogs.length > 0) {
      setSelected(category);
    }
  };

  React.useEffect(() => {
    setBlogsFiltered(blogs.filter((blog) => blog.category === selected.slug));
  }, [selected]);
  return (
    <section className="max-w-6xl mx-auto py-12 px-6 md:px-4">
      <h1 className="w-full flex flex-col font-medium text-4xl md:text-5xl lg:text-6xl">
        <span className="font-title">Our resources</span>
        <span className="font-uncut font-medium tracking-tighter">
          and insights.
        </span>
      </h1>

      <div className="relative flex gap-2 md:gap-2.5 rounded-full overflow-x-scroll no-scrollbar mt-10 lg:mt-0 mb-6">
        {blogCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleClick(category)}
            className={cn(
              "relative z-10 h-fit min-w-fit px-5 py-2.5 border rounded-full font-medium font-manrope text-base text-nowrap uppercase transition-colors duration-300",
              selected.slug === category.slug && "text-white"
            )}
          >
            {category.name}
            {selected.slug === category.slug && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black rounded-full z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 py-5 border-y border-dashed">
        <AnimatePresence mode="popLayout">
          {blogsFiltered.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </AnimatePresence>
      </div>

      {blogsFiltered.length > 6 && (
        <button className="w-fit flex items-center gap-2.5 py-2.5 px-5 mx-auto mt-10 rounded-full font-medium font-manrope text-base text-primary border-2 border-primary">
          Load more
          <ArrowUpRight size={18} />
        </button>
      )}
    </section>
  );
}

export default BlogGrid;
