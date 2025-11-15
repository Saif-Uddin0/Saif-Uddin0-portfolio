import React from "react";
import { motion } from "framer-motion";

import nest from "../../../assets/project-nest.jpg";
import heroio from "../../../assets/hero.jpg";
import artify from "../../../assets/artify.jpg";
import learn from "../../../assets/learnhut.jpg";
import { ArrowRight } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Artify Gallery Website",
      image: artify,
      link: "#",
    },
    {
      id: 2,
      title: "Nest Ecommerce Website",
      image: nest,
      link: "#",
    },
    {
      id: 3,
      title: "Learning Based Website",
      image: learn,
      link: "#",
    },
    {
      id: 4,
      title: "Hero.io Application Website",
      image: heroio,
      link: "#",
    },
  ];

  //parent animation for stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // child animation
  const cardMotion = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className=" py-20 px-6">

      {/* Heading animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold text-center text-white "
      >
        Featured Work
      </motion.h1>
      <p className="text-neutral mt-2 text-center text-sm lg:text-md mx-auto leading-relaxed ">
        Showcasing the work that as
        <span className="text-secondary"> shaped my journey </span>
        a developer.
      </p>
      <div className="border border-accent/20 px-50 container mx-auto mt-5 mb-14"></div>

      {/* Grid with stagger animation */}
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
            whileHover={{
              scale: 1.03,
              rotate: -1.3,
              transition: { type: "spring", stiffness: 150 },
            }}
            className="group relative bg-gradient-to-b from-gray-800/70 to-gray-900/80 p-6 rounded-3xl shadow-lg transition-all duration-300 "
          >

            <div className=" relative group overflow-hidden rounded-2xl shadow-md">
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl group-hover:opacity-70 transition-all duration-300"
              />
              <div className=" absolute 
                        bottom-5 left-1/2 -translate-x-1/2
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-500
                        bg-accent/10 
                        backdrop-blur-md 
                        p-3 rounded-full 
                        flex items-center justify-center">
                <ArrowRight className="text-secondary" size={22} />
              </div>
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                href={project.link}
                className="inline-block bg-gradient-to-r from-primary to-primary/80  text-accent px-5 py-2 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg"
              >
                Read More
              </motion.a>
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
