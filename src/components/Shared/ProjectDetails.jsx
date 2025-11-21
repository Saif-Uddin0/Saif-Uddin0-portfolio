import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Globe, ArrowLeft } from "lucide-react";

export default function ProjectDetails() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.log("Error loading projects:", err));
    }, []);

    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

    if (projects.length === 0) return <h1 className="text-white p-10">Loading...</h1>;
    if (!project) return <h1 className="text-white p-10">Project Not Found</h1>;

    return (
        <section
            className="relative min-h-screen w-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${project.image})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple/80 to-black/90 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 text-white">

                

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-4xl"
                >
                    <h1 className="text-5xl font-extrabold mb-4 bg-accent bg-clip-text text-transparent drop-shadow-xl">
                        {project.title}
                    </h1>

                    <p className="text-neutral-300 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* Main Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 grid grid-cols-1 lg:grid-cols-3 gap-10"
                >
                    {/* Left Section - Overview */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                            <p className="text-neutral-300 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                            <ul className="space-y-3 text-neutral-300">
                                {project.features?.map((f, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-purple-400">•</span> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tech?.map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Links */}
                    <div className="space-y-6 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 h-fit shadow-xl">
                        <h2 className="text-2xl font-bold mb-6">Project Links</h2>

                        <div className="flex flex-col gap-4">
                            {/* Live */}
                            <a
                                href={project.live}
                                target="_blank"
                                className="w-full py-3 px-5 bg-primary hover:bg-purple-500 rounded-xl flex items-center justify-between font-medium transition "
                            >
                                Live Preview <Globe size={20} />
                            </a>

                            {/* Client */}
                            {project.client && (
                                <a
                                    href={project.client}
                                    target="_blank"
                                    className="w-full py-3 px-5 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-between font-medium transition shadow-md border border-accent/20"
                                >
                                    Client Repo <Github size={20} />
                                </a>
                            )}

                            {/* Server */}
                            {project.server && (
                                <a
                                    href={project.server}
                                    target="_blank"
                                    className="w-full py-3 px-5 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-between font-medium transition shadow-md border border-accent/20"
                                >
                                    Server Repo <Github size={20} />
                                </a>
                            )}
                        </div>

                        {/* Back */}
                        <Link
                            to="/"
                            className="mt-6 w-full py-3 px-5 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-2 justify-center transition text-accent border border-accent/20"
                        >
                            <ArrowLeft size={20} /> Back
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
