import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import html from "../../../assets/html5.svg";
import css2 from "../../../assets/css_old.svg";
import tailwind from "../../../assets/tailwindcss.svg";
import reactdrk from "../../../assets/React_wordmark_dark.svg";
import firebase from "../../../assets/firebase.svg";
import node from "../../../assets/nodejs.svg";
import router from "../../../assets/reactrouter.svg";
import ex from "../../../assets/Express.js_dark.svg";
import JS from "../../../assets/javascript.svg";
import Next from "../../../assets/nextjs_icon_dark.svg";
import Github from "../../../assets/github_dark.svg";
import Vercel from "../../../assets/vercel.svg";

const skills = [
    { icon: html, angle: 0, label: "HTML" },
    { icon: css2, angle: 30, label: "CSS" },
    { icon: tailwind, angle: 60, label: "Tailwind" },
    { icon: JS, angle: 90, label: "JavaScript" },
    { icon: reactdrk, angle: 120, label: "React" },
    { icon: Next, angle: 150, label: "Next.js" },
    { icon: firebase, angle: 180, label: "Firebase" },
    { icon: node, angle: 210, label: "Node.js" },
    { icon: ex, angle: 240, label: "Express" },
    { icon: router, angle: 270, label: "Router" },
    { icon: Github, angle: 300, label: "GitHub" },
    { icon: Vercel, angle: 330, label: "Vercel" },
];

const OrbitSkills = () => {
    const containerRef = useRef(null);
    const [radius, setRadius] = useState(150);

    // Auto-scale orbit radius responsively
    useEffect(() => {
        const resize = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.offsetWidth;

            // Clamp radius for perfect responsiveness
            const newRadius = width * 0.22;
            const clamped = Math.min(Math.max(newRadius, 110), 180);
            setRadius(clamped);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div className="mt-15">
            {/* Section Title */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-accent">
                    Comfortable Skills
                </h1>
                <p className="text-neutral text-sm md:text-md mt-3">
                    Technologies I use to build{" "}
                    <span className="text-secondary font-semibold">fast and modern</span>{" "}
                    web applications.
                </p>
            </div>
                <div className="border border-primary/40 px-50 container mx-auto mt-5"></div>

            {/* Orbit Container */}
            <div
                ref={containerRef}
                className="relative mx-auto w-full max-w-4xl aspect-square flex items-center justify-center"
            >
                {/* Center Bubble */}
                <div
                    className="
          z-20 px-6 py-3 rounded-full bg-primary text-accent font-bold
          shadow-lg border border-accent/30
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        "
                >
                    My Stack
                </div>

                {/* Orbit Skill Items */}
                {skills.map((s, i) => {
                    const rad = (s.angle * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;

                    return (
                        <motion.div
                            key={i}
                            className="
                absolute flex flex-col items-center
                bg-accent/10 backdrop-blur-md p-3 rounded-2xl shadow-lg
                hover:scale-110 transition-all duration-500 border border-accent/20
              "
                            style={{
                                top: `calc(50% + ${y}px)`,
                                left: `calc(50% + ${x}px)`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <img src={s.icon} className="w-10 h-10 sm:w-12 sm:h-12" alt={s.label} />
                            <p className="text-accent text-[10px] sm:text-xs mt-1">{s.label}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrbitSkills;
