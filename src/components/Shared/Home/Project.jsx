import React from "react";
import { motion } from "framer-motion";
import nest from "../../../assets/project-nest.jpg";
import heroio from "../../../assets/hero.jpg";
import artify from "../../../assets/artify.jpg";
import learn from "../../../assets/learnhut.jpg";
import { ArrowRight } from "lucide-react";

const projects = [
  { id: 1, title: "Artify Gallery Website", image: artify, link: "#" },
  { id: 2, title: "Nest Ecommerce Website", image: nest, link: "#" },
  { id: 3, title: "Learning Based Website", image: learn, link: "#" },
  { id: 4, title: "Hero.io Application Website", image: heroio, link: "#" },
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold text-center text-white"
      >
        Featured Work
      </motion.h1>
      <p className="text-neutral mt-2 text-center text-sm lg:text-md mx-auto leading-relaxed">
        Showcasing work that has{" "}
        <span className="text-secondary font-medium">shaped my journey</span>{" "}
        as a developer.
      </p>
      <div className="border border-accent/20 container mx-auto mt-5 mb-14"></div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardMotion}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative bg-accent/10 backdrop-blur-md p-5 rounded-3xl shadow-md transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-2xl w-full h-auto object-cover transition-transform duration-500 ease-in-out"
                whileHover={{ scale: 1.05, opacity: 0.85 }}
              />
              {/* Center Arrow */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="bg-accent/20 backdrop-blur-xl p-5 rounded-full flex items-center justify-center shadow-lg border border-accent/80">
                  <ArrowRight className="text-purple-800" size={32} />
                </div>
              </motion.div>
            </div>

            {/* Project Title and Link */}
            <div className="mt-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <motion.a
                
                className=" group items-center flex justify-center gap-1.5 mx-auto bg-gradient-to-r from-primary to-primary/80 text-accent px-4 py-2 rounded-lg font-medium transition-shadow duration-300"
              >
                <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">
                  Read More
                </span>
                <ArrowRight className="transition-all duration-700 ease-in-out group-hover:-translate-x-26" />
              </motion.a>
            </div>

            {/* Subtle Glow */}
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
