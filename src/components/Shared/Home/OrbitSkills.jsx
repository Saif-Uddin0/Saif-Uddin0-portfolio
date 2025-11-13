import React from "react";
import { motion } from "framer-motion";

const skills = [
  { icon: "/html5.svg", angle: -60, radius: 220 },
  { icon: "/css3.svg", angle: 60, radius: 220 },
  { icon: "/nodejs.svg", angle: 180, radius: 260 },
  { icon: "/js.svg", angle: -120, radius: 260 },
  { icon: "/react.svg", angle: -30, radius: 300 },
  { icon: "/express.svg", angle: 30, radius: 300 },
  { icon: "/mongo.svg", angle: 90, radius: 280 },
];

const OrbitSkills = () => {
  return (
    <div className="w-full h-screen bg-black relative flex justify-center items-center overflow-hidden">

      {/* Center Core */}
      <div className="px-5 py-2 rounded-full bg-orange-500 text-black font-bold z-20">
        My Stack
      </div>

      {/* Skill Icons Orbit */}
      {skills.map((s, i) => (
        <motion.img
          key={i}
          src={s.icon}
          className="w-12 h-12 absolute"
          animate={{
            x: Math.cos((s.angle * Math.PI) / 180) * s.radius,
            y: Math.sin((s.angle * Math.PI) / 180) * s.radius,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optional Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[46px_46px] opacity-20" />
      </div>
    </div>
  );
};

export default OrbitSkills;
