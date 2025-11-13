import React from 'react'
import Marquee from "react-fast-marquee";

import html from '../../../assets/html5.svg';
import css2 from '../../../assets/css_old.svg';
import tailwind from '../../../assets/tailwindcss.svg';
import reactdrk from '../../../assets/React_wordmark_dark.svg';
import firebase from '../../../assets/firebase.svg';
import node from '../../../assets/nodejs.svg';
import router from '../../../assets/reactrouter.svg';
import ex from '../../../assets/Express.js_dark.svg';

const Maeque = () => {

    const logos = [html, css2, tailwind, reactdrk, firebase, node, router, ex];

    return (
        <div className="my-24 w-11/12 lg:container mx-auto px-4">

            {/* Section Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-accent tracking-tight">
                    Comfortable Skills
                </h1>
                <p className="text-neutral mt-3 text-sm lg:text-md  mx-auto leading-relaxed">
                    Technologies I use confidently to build <span className='text-secondary'>fast, modern, and interactive</span><br /> web applications.
                </p>
            </div>

            {/* Marquee */}
            <Marquee
                speed={45}
                pauseOnHover={true}
                gradient={true}
                gradientColor={[21, 16, 34]} 
                gradientWidth={100}
            >
                <div className="flex items-center gap-12 md:gap-16 lg:gap-24 py-4">

                    {logos.map((logo, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col items-center transition-all"
                        >
                            <img
                                src={logo}
                                alt="technology"
                                className="
                                    w-20 md:w-24 
                                    opacity-70 
                                    group-hover:opacity-100 
                                    group-hover:scale-115
                                    transition-all 
                                    duration-300
                                    drop-shadow-[0_0_10px_rgba(255,255,255,0)]
                                "
                            />
                        </div>
                    ))}

                </div>
            </Marquee>
        </div>
    );
};

export default Maeque;
