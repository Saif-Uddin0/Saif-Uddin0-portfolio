import React from "react";
import { motion } from "framer-motion";

export default function AboutCard({
    title = "Mymuna Jahan",
    dropDelay = 0.2,
}) {
    return (
        <section className="relative w-full flex flex-col items-center   px-4 sm:px-12  lg:pt-12 pt-12 lg:pb-12 pb-6 ">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent  text-center">
                About Me
            </h2>
            <div className="border border-primary/40 px-50 container mx-auto mt-5 mb-10 sm:mb-12"></div>

            <div className="relative w-full flex justify-center pointer-events-none mb-8">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0">
                    <div className="w-1.5 h-36 sm:h-72 md:h-96 bg-gradient-to-b from-primary/80 to-transparent mx-auto rounded-full" />
                </div>

                <motion.div
                    initial={{ y: -200, rotate: -8, opacity: 0 }}
                    whileInView={{ y: 0, rotate: [-8, 5, -3, 0], opacity: 1 }}
                    transition={{
                        delay: dropDelay,
                        y: { type: "spring", stiffness: 60, damping: 12 },
                        rotate: { duration: 1.4, ease: "easeOut" },
                        opacity: { duration: 0.6 },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="pointer-events-auto relative z-50 mt-12 w-full max-w-md sm:max-w-3xl"
                >
                    <div className="w-full backdrop-blur-sm bg-[#1c1036]/30 border border-purple-500/40 rounded-3xl shadow-md shadow-purple-700/30 overflow-hidden">

                        {/* Header */}
                        <div className="flex flex-col items-center gap-6 p-8 border-b border-purple-500/30">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-primary">{title}</h3>
                                <p className="text-base text-gray-300 mt-1">MERN Stack Developer</p>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="p-8 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                            <p>
                                Hi, I’m <span className="text-primary font-semibold">Saif Uddin</span>, a passionate <span className="text-primary">MERN Stack Developer</span> from Bangladesh 🇧🇩, building modern & responsive web applications.
                            </p>
                            <p>
                                I’m currently completing my industrial attachment at
                                <span className="text-primary"> BD Calling</span>, where I’m gaining real-world development
                                experience and learning industry-standard practices.
                            </p>
                            <p>
                                I am completing my <span className="text-primary">Diploma in Computer Science</span> from <span className="text-primary">Feni Computer Institute</span> (Session 2021-2022), which is helping me build a strong foundation for web development.
                            </p>
                            <p>
                                I’m currently completing my industrial attachment at
                                <span className="text-primary"> BD Calling</span>, where I’m gaining real-world development
                                experience and learning industry-standard practices.
                            </p>
                        </div>

                        {/* Footer Gradient */}
                        <div className="h-2 bg-gradient-to-r from-purple-500/50 via-primary/30 to-pink-500/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
