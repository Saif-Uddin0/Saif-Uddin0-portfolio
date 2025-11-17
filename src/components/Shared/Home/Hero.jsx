import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Img from '../../../assets/imgme3.png'
import Bg from '../../../assets/bg1.png'
import logo from '../../../assets/Star 1.png'
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="relative overflow-hidden  text-accent py-24 ">


            <div className="container mx-auto px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* ===== LEFT TEXT SECTION ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 lg:px-7 ">

                    {/* Badge */}
                    <span className="inline-block bg-accent/10 text-neutral px-2 py-2 rounded-full text-sm mb-5 backdrop-blur border border-accent/20">
                        <span className="flex items-center gap-1"><img src={logo} className="w-4" alt="" /> Available For Opportunities</span>
                    </span>

                    {/* Heading */}
                    <h1 className="animate-fadeIn text-2xl font-semibold ">


                        <span className="font-medium mb-1">Hey, I'm Saif,</span>

                        {/* Line 2 — Fade In */}
                        <div className=" text-4xl mt-2 lg:text-5xl font-bold text-primary">
                            <span className="text-accent">A</span>
                            {/* Typewriter Line */}
                            <Typewriter
                                words={[" Mern Stack Developer."]}
                                loop={true}
                                typeSpeed={50}
                                cursor
                                deleteSpeed={50}
                            />

                        </div>

                        {/* Line 3 — Fade In */}
                        <div className="animate-fadeIn mt-2 text-4xl lg:text-5xl font-bold leading-snug">
                            Based in Bangladesh.
                        </div>

                    </h1>


                    {/* Subtitle */}
                    <p className="text-accent/70 leading-relaxed mb-8">
                        Building functional, user-friendly and modern web interfaces that help
                        your business grow and improve user engagement.
                    </p>

                    {/* Buttons */}
                    <div className="flex  items-center gap-4 pt-2">
                        <Link
                            to={`/contact`}
                            className="group bg-accent flex items-center justify-between gap-1.5 text-base-300 px-6 py-3 rounded-full font-semibold shadow hover:bg-accent/90 transition"
                        >
                            <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">
                                Let's Talk
                            </span>
                            <ArrowRight className="transition-all duration-700 ease-in-out group-hover:-translate-x-22" />
                        </Link>
                        {/*  bg-accent px-6 py-3 rounded-full font-semibold shadow hover:bg-accent/90 transition */}
                        <Link
                            to={`/about`}
                            className="group bg-accent/15 z-10  flex items-center justify-between gap-1.5  px-6 py-3 rounded-full font-semibold shadow border border-accent/50 text-accent transition"
                        >
                            <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">
                                My Works
                            </span>
                            <ArrowRight className="transition-all duration-700 ease-in-out group-hover:-translate-x-23" />
                        </Link>
                    </div>
                </motion.div>

                {/* ===== RIGHT IMAGE SECTION ===== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-full md:w-1/2 flex justify-center">

                    {/* Hexagon Image Container */}
                    <div className="relative bg-base-300 rounded-[40px] overflow-hidden flex items-end justify-center border border-accent/15 shadow-xl ">

                        <img
                            src={Img}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />

                        {/* Circular Download Button */}
                        <a href="https://drive.google.com/file/d/1TpGAgHrYb-eOBrr5RX8AkIvpDxiGoj4R/view?usp=sharing"
                            target="_blank"
                            className="absolute  flex bottom-8 ;left-50 justify-center">
                            <div className="absolute top-0 left-5 w-72 h-72 bg-purple-900/30 blur-[120px] rounded-full"></div>
                            <div className="absolute top-0 right-10 w-72 h-72 bg-purple-900/20 blur-[120px] rounded-full"></div>
                            <div class="download-btn">
                                <svg viewBox="0 0 300 300" class="circle-svg">
                                    <defs>
                                        <path id="circlePath"
                                            d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" />
                                    </defs>

                                    <text class="circle-text ">
                                        <textPath href="#circlePath" startOffset="0%" className="transition-transform animate-spin">
                                            DOWNLOAD CV • DOWNLOAD CV • DOWNLOAD CV •
                                        </textPath>
                                    </text>
                                </svg>

                                <div class="center-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" className="">
                                        <path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14"
                                            stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>

                        </a>
                    </div>

                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
