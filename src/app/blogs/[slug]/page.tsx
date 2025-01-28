import React from "react";
import MarkdownRenderer from "./markdown";

function SingleBlog() {
  return (
    <main className="py-24 px-6 md:px-4">
      <section className="max-w-6xl flex flex-col gap-10 mx-auto mb-10">
        <h1 className="font-title font-medium text-4xl md:text-5xl lg:text-6xl">
          Effectively Integrating and Machine Learning in Your Organization
        </h1>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 font-uncut tracking-tighter text-xl">
            <span>Category</span>
          </div>

          <div className="flex items-center gap-2 font-uncut tracking-tighter text-xl">
            <span>August 25, 2024</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <img
        className="max-w-7xl mx-auto aspect-[16/7] rounded-2xl overflow-hidden"
        src="https://cdn.prod.website-files.com/6737c1285c19cb297eefcddf/6739b17255e14a019c674270_image-6.webp"
        alt=""
      />

      <section className="max-w-6xl mx-auto mt-10 px-6 md:px-4">
        <MarkdownRenderer />
      </section>
    </main>
  );
}

export default SingleBlog;
