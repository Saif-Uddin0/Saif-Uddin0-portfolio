import React from "react";
import { motion } from "framer-motion";
import nest from "../../../assets/project-nest.jpg";
import heroio from "../../../assets/hero.jpg";
import artify from "../../../assets/artify.jpg";
import learn from "../../../assets/learnhut.jpg";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Artify Gallery Website",
    image: artify,
    description:
      "Artify is a modern MERN-based artwork marketplace with category filtering, secure authentication, wishlist, and user dashboard. Built with React, Node.js, MongoDB, and Firebase.",
    live: "https://artify-c4d2a.web.app/",
    client: "https://github.com/Saif-Uddin0/Artify-clinet",
    server: "https://github.com/Saif-Uddin0/Artify-Server",
  },
  {
    id: 2,
    title: "Nest Ecommerce Website",
    image: nest,
    description:
      "Nest Mart is a responsive grocery e-commerce platform built with React & Tailwind. It features category filtering, product details pages, beautiful UI, and reusable components.",
    live: "https://nest-mart-and-grosery.vercel.app/",
    client: "https://github.com/Saif-Uddin0/Nest-Mart-And-Grosery",
    server: "",
  },
  {
    id: 3,
    title: "Learn Hut – Learning Platform",
    image: learn,
    description:
      "Learn Hut is an educational learning platform with course filtering, clean UI, authentication, and responsive pages. Built using React, Firebase & Tailwind.",
    live: "https://learn-hut-f8527.web.app/skill",
    client: "https://github.com/Saif-Uddin0/Learn-Hut",
    server: "",
  },
  {
    id: 4,
    title: "Hero.io – Web Application",
    image: heroio,
    description:
      "Hero.io is a UI-focused application project showcasing clean layouts, animations, and dynamic content rendering.",
    live: "https://app-projet08-saifuddin.netlify.app/",
    client: "https://github.com/Saif-Uddin0/Hero-App",
    server: "",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Project = () => {
  return (
    <div className="py-20 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold text-center text-white"
      >
        Featured Work
      </motion.h1>

      <p className="text-neutral mt-2 text-center text-sm lg:text-md mx-auto leading-relaxed">
        Showcasing projects that{" "}
        <span className="text-secondary font-medium">define my skills</span> as a MERN Stack Developer.
      </p>

      <div className="border border-primary/50 container mx-auto mt-5 mb-14"></div>

      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardMotion}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group bg-[#0e0e16]/60 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/10 transition"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-2xl w-full h-[380px] object-cover transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              />

              {/* Hover Center Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary p-4 rounded-full shadow-lg border border-accent/70">
                  <ArrowRight size={30} className="text-black" />
                </div>
              </motion.div>
            </div>

            {/* Info Box */}
            <div className="mt-5 bg-gradient-to-b from-[#201b3a]/80 to-[#0f0d1c]/80 p-5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-neutral text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {/* Live */}
                <a
                  href={project.live}
                  target="_blank"
                  className=" px-4 py-2 bg-primary text-accent rounded-lg font-medium text-sm hover:bg-primary/80 transition flex items-center gap-2"
                >
                  <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">
                    Live
                  </span>
                  <ArrowRight size={20} className="transition-all duration-700 ease-in-out group-hover:-translate-x-11" />
                </a>

                {/* Client */}
                {project.client && (
                  <a
                    href={project.client}
                    target="_blank"
                    className="px-4 py-2 bg-[#1e1e2d] text-white rounded-lg font-medium text-sm hover:bg-[#2a2a3d] transition"
                  >
                    Client
                  </a>
                )}

                {/* Server */}
                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    className="px-4 py-2 bg-[#1e1e2d] text-white rounded-lg font-medium text-sm hover:bg-[#2a2a3d] transition"
                  >
                    Server
                  </a>
                )}

                {/* More */}
                {/* <a
                  href="#"
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg font-medium text-sm transition"
                >
                  View More
                </a> */}
              </div>
            </div>

            {/* Soft Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-pink-500/10 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
