import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log("Error loading projects:", err));
  }, []);

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
        <span className="text-secondary font-medium">define my skills</span> as
        a MERN Stack Developer.
      </p>

      <div className="border border-primary/50 container mx-auto mt-5 mb-14"></div>

      {/* Project Grid */}
      <motion.div
        variants={container}
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 container mx-auto mt-20"
      >
        {projects.slice(0,3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
