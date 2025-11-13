import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#1a1528] text-white py-24">

            {/* Top Purple Glows */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/30 blur-[120px] rounded-full"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-700/30 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">

                {/* ===== LEFT TEXT SECTION ===== */}
                <div className="w-full md:w-1/2">

                    {/* Badge */}
                    <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-sm mb-6 backdrop-blur border border-white/10">
                        ✦ Available For Opportunities
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
                        Hey, I'm Mahir, <br />
                        Web Developer <br />
                        Based in Bangladesh.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/60 max-w-md leading-relaxed mb-8">
                        Building functional, user-friendly and modern web interfaces that help
                        your business grow and improve user engagement.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-white/90 transition">
                            Let's Talk
                        </button>

                        <button className="bg-white/10 border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition">
                            My Works
                        </button>
                    </div>
                </div>

                {/* ===== RIGHT IMAGE SECTION ===== */}
                <div className="w-full md:w-1/2 flex justify-center relative">

                    {/* Hexagon Image Container */}
                    <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[380px] bg-[#2a233a] rounded-[40px] overflow-hidden flex items-end justify-center border border-white/10 shadow-xl">

                        <img
                            src="https://i.ibb.co/WPz1w7r/pexels-italo-melo-2379005.jpg"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />

                        {/* Circular Download Button */}
                        <div className="absolute -bottom-8 flex justify-center">
                            <button className="w-20 h-20 rounded-full bg-gradient-to-b from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-xl border border-white/20 hover:scale-105 transition">
                                <Download size={26} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
