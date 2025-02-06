"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tags = [
  {
    slug: "frontend",
    name: "Frontend",
  },
  {
    slug: "backend",
    name: "Backend",
  },
  {
    slug: "database",
    name: "Database",
  },
  {
    slug: "mobile",
    name: "Mobile App",
  },
  {
    slug: "devops",
    name: "DevOps",
  },
  {
    slug: "ui",
    name: "UI/UX",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: "/images/technologies/javascript.svg",
    tag: "frontend",
  },
  {
    name: "TypeScript",
    icon: "/images/technologies/typescript.svg",
    tag: "frontend",
  },
  {
    name: "React JS",
    icon: "/images/technologies/react.svg",
    tag: "frontend",
  },
  {
    name: "Next JS",
    icon: "/images/technologies/nextjs.svg",
    tag: "frontend",
  },
  {
    name: "Nuxt JS",
    icon: "/images/technologies/nuxtjs.svg",
    tag: "frontend",
  },
  {
    name: "Vue JS",
    icon: "/images/technologies/vuejs.svg",
    tag: "frontend",
  },
  {
    name: "Material UI",
    icon: "/images/technologies/mui.svg",
    tag: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/technologies/tailwind.svg",
    tag: "frontend",
  },
  {
    name: "C#",
    icon: "/images/technologies/c-sharpe.svg",
    tag: "backend",
  },
  {
    name: ".Net",
    icon: "/images/technologies/dotnet.svg",
    tag: "backend",
  },
  {
    name: "Java",
    icon: "/images/technologies/java.svg",
    tag: "backend",
  },
  {
    name: "Spring Boot",
    icon: "/images/technologies/springboot.svg",
    tag: "backend",
  },
  {
    name: "Paython",
    icon: "/images/technologies/python.svg",
    tag: "backend",
  },
  {
    name: "Django",
    icon: "/images/technologies/django.svg",
    tag: "backend",
  },
  {
    name: "Node JS",
    icon: "/images/technologies/nodejs.svg",
    tag: "backend",
  },
  {
    name: "Nest JS",
    icon: "/images/technologies/nestjs.svg",
    tag: "backend",
  },
  {
    name: "PHP",
    icon: "/images/technologies/php.svg",
    tag: "backend",
  },
  {
    name: "Laravel",
    icon: "/images/technologies/laravel.svg",
    tag: "backend",
  },
  {
    name: "Postgres",
    icon: "/images/technologies/postgress.svg",
    tag: "database",
  },
  {
    name: "MySQL",
    icon: "/images/technologies/mysql.svg",
    tag: "database",
  },
  {
    name: "MongoDB",
    icon: "/images/technologies/mongodb.svg",
    tag: "database",
  },
  {
    name: "Firebase",
    icon: "/images/technologies/firebase.svg",
    tag: "database",
  },
  {
    name: "Supabase",
    icon: "/images/technologies/supabase.png",
    tag: "database",
  },
  {
    name: "Redis",
    icon: "/images/technologies/redis.webp",
    tag: "database",
  },
  {
    name: "Kotlin",
    icon: "/images/technologies/kotlin.svg",
    tag: "mobile",
  },
  {
    name: "Swift",
    icon: "/images/technologies/swift.svg",
    tag: "mobile",
  },
  {
    name: "Flutter",
    icon: "/images/technologies/flutter.svg",
    tag: "mobile",
  },
  {
    name: "React Native",
    icon: "/images/technologies/react-native.svg",
    tag: "mobile",
  },
  {
    name: "AWS",
    icon: "/images/technologies/aws.svg",
    tag: "devops",
  },
  {
    name: "Azure",
    icon: "/images/technologies/azure.svg",
    tag: "devops",
  },
  {
    name: "GCP",
    icon: "/images/technologies/gc.svg",
    tag: "devops",
  },
  {
    name: "Docker",
    icon: "/images/technologies/docker.svg",
    tag: "devops",
  },
  {
    name: "Figma",
    icon: "/images/technologies/figma.svg",
    tag: "ui",
  },
  {
    name: "Adobe XD",
    icon: "/images/technologies/xd.svg",
    tag: "ui",
  },
  {
    name: "Adobe Indesign",
    icon: "/images/technologies/indesign.svg",
    tag: "ui",
  },
  {
    name: "Adobe Photoshop",
    icon: "/images/technologies/ps.svg",
    tag: "ui",
  },
  {
    name: "Sketch",
    icon: "/images/technologies/sketch.svg",
    tag: "ui",
  },
];

function Technologies() {
  const [selected, setSelected] = React.useState(tags[0]);
  const [technologiesFiltered, setTechnologiesFiltered] = React.useState(
    technologies.filter((tech) => tech.tag === selected.slug)
  );

  React.useEffect(() => {
    setTechnologiesFiltered(
      technologies.filter((tech) => tech.tag === selected.slug)
    );
  }, [selected]);

  return (
    <section className="max-w-6xl mx-auto py-24 pb-10 px-6 md:px-4">
      <h1 className="max-w-md font-medium text-4xl md:text-5xl mb-16">
        <span className="font-title">The Technology</span>
        <br />
        <span className="font-uncut tracking-tighter">we are deal with.</span>
      </h1>

      <div className="flex flex-col gap-6">
        <div className="relative flex gap-2 md:gap-2.5 rounded-full overflow-x-scroll no-scrollbar">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setSelected(tag)}
              className={cn(
                "relative z-10 h-fit min-w-fit px-5 py-2.5 border rounded-full font-medium font-manrope text-base text-nowrap transition-colors duration-300",
                selected.slug === tag.slug && "text-white"
              )}
            >
              {tag.name}
              {selected.slug === tag.slug && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-2xl pl-1 py-2">{selected.name}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            <AnimatePresence mode="popLayout">
              {technologiesFiltered.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center gap-3.5 p-1.5 rounded-xl aspect-square shadow duration-300"
                >
                  <Image
                    className="h-20 w-auto"
                    src={tech.icon}
                    alt={tech.name}
                    width={200}
                    height={200}
                  />

                  <h2 className="text-base md:text-lg text-center">
                    {tech.name}
                  </h2>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
