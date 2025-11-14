import React from "react";
import { motion } from "framer-motion";

import html from "../../../assets/html5.svg";
import css2 from "../../../assets/css_old.svg";
import tailwind from "../../../assets/tailwindcss.svg";
import reactdrk from "../../../assets/React_wordmark_dark.svg";
import firebase from "../../../assets/firebase.svg";
import node from "../../../assets/nodejs.svg";
import router from "../../../assets/reactrouter.svg";
import ex from "../../../assets/Express.js_dark.svg";

const skills = [
    { icon: html, angle: 0 },
    { icon: css2, angle: 45 },
    { icon: tailwind, angle: 90 },
    { icon: reactdrk, angle: 135 },
    { icon: firebase, angle: 180 },
    { icon: node, angle: 225 },
    { icon: router, angle: 270 },
    { icon: ex, angle: 315 },
];

const OrbitSkills = () => {
    return (
        <div className="mt-30">
            {/* Section Title */}
            <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-accent tracking-tight">
                    Comfortable Skills
                </h1>
                <p className="text-neutral mt-3 text-sm lg:text-md mx-auto leading-relaxed">
                    Technologies I use confidently to build
                    <span className="text-secondary"> fast, modern, and interactive </span>
                    web applications.
                </p>
                <div className="border border-accent/20 px-50 container mx-auto mt-5"></div>
            </div>

            {/* Orbit Wrapper */}
            <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] flex justify-center items-center overflow-visible mt-0 lg:-mt-10">

                {/* Center Bubble */}
                <div className="
                    px-6 py-3 rounded-full bg-primary text-accent min-w-20
                    font-bold text-sm z-20 shadow-lg border border-accent/30
                ">
                    My Stack
                </div>

                {/* Orbit Elements */}
                {skills.map((s, i) => {
                    // RESPONSIVE RADIUS
                    const radius = {
                        base: 120,   // mobile
                        sm: 150,     // small devices
                        md: 200,     // mid screens
                        lg: 260,     // laptops
                        xl: 300,     // big screens
                    };

                    const r =
                        window.innerWidth < 480 ? radius.base :
                        window.innerWidth < 640 ? radius.sm :
                        window.innerWidth < 1024 ? radius.md :
                        window.innerWidth < 1440 ? radius.lg :
                        radius.xl;

                    const x = Math.cos((s.angle * Math.PI) / 180) * r;
                    const y = Math.sin((s.angle * Math.PI) / 180) * r;

                    return (
                        <React.Fragment key={i}>

                            {/* Connecting Line */}
                            <motion.div
                                className="absolute bg-gray-500/40"
                                style={{
                                    width: `${r}px`,
                                    height: "1.5px",
                                    left: "50%",
                                    top: "50%",
                                    transformOrigin: "left center",
                                }}
                                animate={{ rotate: s.angle }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />

                            {/* Skill Icon */}
                            <motion.img
                                src={s.icon}
                                className="
                                    w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                                    absolute drop-shadow-xl
                                    hover:scale-110 transition-all duration-300
                                "
                                style={{
                                    left: `calc(50% + ${x}px - 28px)`,
                                    top: `calc(50% + ${y}px - 28px)`,
                                }}
                            />
                        </React.Fragment>
                    );
                })}

                {/* Subtle Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)]" />
                </div>
            </div>
        </div>
    );
};

export default OrbitSkills;
