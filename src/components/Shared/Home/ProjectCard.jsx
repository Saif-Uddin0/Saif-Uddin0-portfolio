import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardMotion}
      whileHover={{ y: -6, scale: 1.02 }}
      className="
        relative group bg-[#0e0e16]/60 backdrop-blur-md 
        p-5 sm:p-6 rounded-3xl shadow-lg border border-white/10 
        transition 
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="rounded-2xl w-full h-full object-cover transition-all duration-500"
          whileHover={{ scale: 1.05 }}
        />

        {/* Hover Center Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.live}
            target="_blank"
            className="bg-primary p-4 rounded-full shadow-lg border border-accent/70"
          >
            <ArrowRight size={28} className="text-accent" />
          </a>
        </motion.div>
      </div>

      {/* Info Box */}
      <div
        className="
          mt-5 bg-gradient-to-b 
          from-[#201b3a]/80 to-[#0f0d1c]/80 
          p-5 rounded-xl border border-white/10 
          flex flex-col justify-between 
          min-h-[230px] sm:min-h-[250px] md:min-h-[260px]
        "
      >
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
            {project.title}
          </h3>
          <p className="text-neutral text-sm mt-2 leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>

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
              className="px-4 py-2 bg-[#1e1e2d] text-white rounded-lg font-medium border border-accent/15 text-sm hover:bg-[#2a2a3d] transition"
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
          <Link
            to={`/project-details/${project.id}`}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg font-medium text-sm transition"
          >
            View More
          </Link>
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
  );
};

export default ProjectCard;
