import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { Download } from "lucide-react";
import Img from '../../../assets/imgme3.png'
import Bg from '../../../assets/bg1.png'
import logo from '../../../assets/Star 1.png'
const Hero = () => {
    return (
        <section className="relative overflow-hidden  text-accent py-24 ">


            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-15">

                {/* ===== LEFT TEXT SECTION ===== */}
                <div className="w-full md:w-1/2 ">

                    {/* Badge */}
                    <span className="inline-block bg-accent/10 text-neutral px-2 py-2 rounded-full text-sm mb-5 backdrop-blur border border-accent/20">
                        <span className="flex items-center gap-1"><img src={logo} className="w-4" alt="" /> Available For Opportunities</span>
                    </span>

                    {/* Heading */}
                    <h1 className="animate-fadeIn text-2xl font-semibold ">

                        
                        <span className="">Hey, I'm Saif,</span>

                        {/* Line 2 — Fade In */}
                        <div className=" text-4xl mt-2 lg:text-5xl font-bold text-primary">
                            <span className="text-accent">A</span>
                            {/* Typewriter Line */}
                            <Typewriter
                            words={[` Mern Stack Developer`]}
                            loop={true}
                            typeSpeed={40}
                            cursor
                            deleteSpeed={40}
                        />
                            
                        </div>

                        {/* Line 3 — Fade In */}
                        <div className="animate-fadeIn mt-2 text-4xl lg:text-5xl font-bold leading-snug">
                            Based in Bangladesh.
                        </div>

                    </h1>


                {/* Subtitle */}
                <p className="text-accent/60 leading-relaxed mb-8">
                    Building functional, user-friendly and modern web interfaces that help
                    your business grow and improve user engagement.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <button className="bg-accent text-base-300 px-6 py-3 rounded-full font-semibold shadow hover:bg-accent/90 transition">
                        Let's Talk
                    </button>

                    <button className="bg-accent/10 border border-accent/20 px-6 py-3 rounded-full font-semibold hover:bg-accent/20 transition">
                        My Works
                    </button>
                </div>
            </div>

            {/* ===== RIGHT IMAGE SECTION ===== */}
            <div className="w-full  flex justify-center relative">

                {/* Hexagon Image Container */}
                <div className="relative bg-base-300 rounded-[40px] overflow-hidden flex items-end justify-center border border-accent/15 shadow-xl ">

                    <img
                        src={Img}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />

                    {/* Circular Download Button */}
                    <div className="absolute  flex bottom-8 ;left-50 justify-center">
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

                    </div>
                </div>

            </div>
        </div>
        </section >
    );
};

export default Hero;
