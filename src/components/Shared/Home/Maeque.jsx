import React from 'react'
import Marquee from "react-fast-marquee";

const Maeque = () => {

    const texts = [
        "Crafting Clean & Modern Web Apps •",
        "Focused on Performance & UX •",
        "Creative Frontend Development •",
        "Fast Deploys, Smooth Experience •",
        "Bringing Designs to Life •",
        "Quality Code, Better Products •"
    ];

    return (
        <div className="w-11/12 lg:container mx-auto px-4">


            {/* Glassmorphic Accent Box */}
            <div className="
                bg-white/10 
                 py-5
                border border-accent/30 
                shadow-xl 
                rounded-2xl 
                p-4
            ">
                <Marquee
                    speed={45}
                    pauseOnHover={true}
                    gradient={false}
                >
                    <div className="flex items-center gap-10 md:gap-14 lg:gap-20">

                        {texts.map((text, index) => (
                            <div
                                key={index}
                                className="text-lg lg:text-xl font-medium text-accent
                                           hover:text-purple-500 transition-all duration-300 
                                           tracking-wide"
                            >
                                {text}

                                {/* Vertical Separator Line */}
                                <span className="inline-block mx-6 mt-2 h-6 w-[2px] bg-accent/40"></span>
                            </div>
                        ))}

                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Maeque;
