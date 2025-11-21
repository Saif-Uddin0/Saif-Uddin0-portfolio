import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/Shared/Home/ProjectCard";


const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const ExploreProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.log("Error loading projects:", err));
    }, []);

    return (
        <div className="min-h-screen bg-[#0b0b11] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
                        Explore All Projects
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Browse through all of my projects to see <span className="text-primary">my work in web development,</span> and full-stack applications.
                    </p>
                    <div className="border border-primary/50 container mx-auto mt-5 mb-20"></div>
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    variants={container}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10 container mx-auto p-3"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ExploreProjects;
