import React from "react";
import { motion } from "framer-motion";
import bgImg from '../assets/frontend-development-skills.jpg'
import profile from '../assets/profile.jpg'

export default function AboutPage() {
    return (
        <div
            className="min-h-screen w-full bg-cover object-cover bg-center text-white px-5 lg:px-0 py-20"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* Overlay */}
            <div className="bg-black/60 w-full min-h-screen absolute top-0 left-0 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl font-bold mb-14"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full flex justify-center"
                    >
                        <img
                            src={profile}
                            alt="profile"
                            className="w-100 h-100 object-cover rounded-2xl shadow-2xl border border-white/20"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl font-semibold">Hey, I'm Mahir</h3>
                        <h4 className="text-xl font-medium text-primary">
                            MERN Stack Developer & Web Designer
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                            I'm Mahir, a passionate MERN Stack Developer with strong skills in
                            building modern web applications using MongoDB, Express, React,
                            and Node.js. I create high-performance full‑stack applications,
                            dynamic UI components, and scalable backend systems.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I love turning ideas into fully functional digital products. I'm
                            always open to new opportunities, collaborations, and exciting
                            challenges.
                        </p>
                    </motion.div>
                </div>

                {/* Workflow Section */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-3xl font-bold mt-24 backdrop-blur-md mb-12"
                >
                    My Workflow
                </motion.h3>
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-[#1b1b1b]/80 border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-sm"
                        >
                            <h4 className="text-xl font-semibold mb-2">Step {step}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step === 1 &&
                                    "Understanding project requirements, goals, and user needs clearly before development begins."}
                                {step === 2 &&
                                    "Designing wireframes, UI layouts, and clean interfaces that match the client's brand."}
                                {step === 3 &&
                                    "Developing full-stack functionality using MERN Stack with clean, optimized code."}
                                {step === 4 &&
                                    "Final polishing, testing, deployment, and ensuring everything runs smoothly."}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills  */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-3xl font-bold mt-24 mb-10 backdrop-blur-md"
                >
                    Technologies I Use
                </motion.h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Firebase", "JWT Auth", "Git & GitHub"].map(
                        (skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[#1b1b1b]/80 border border-white/10 p-4 rounded-xl text-center shadow-lg backdrop-blur-sm"
                            >
                                {skill}
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
