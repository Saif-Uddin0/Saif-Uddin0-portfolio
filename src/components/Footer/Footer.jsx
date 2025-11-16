import React from "react";
import { Linkedin, Instagram, Dribbble, Phone, GithubIcon } from "lucide-react";
import logo from '../../assets/Star 1.png'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-base-300/95 border-t border-base-200 text-accent  rounded-t-[40px] ">
            <div className="container mx-auto pt-20 pb-10">
                {/* Main Text Section */}
                <div className=" text-center px-4">
                    <span className="inline-block bg-accent/10 text-neutral px-4 py-2 rounded-full text-sm mb-5 backdrop-blur border border-accent/20">
                        <span className="flex items-center gap-1"><img src={logo} className="w-4" alt="" /> Available For Opportunities</span>
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold leading-snug">
                        Let’s bring your ideas to life <br />
                        through clean, modern <br />
                        web development.
                    </h2>

                    <Link to={'/contact'}>
                        <button className="mt-8 bg-accent text-base-300 px-6 py-3 rounded-full font-semibold flex items-center gap-2 justify-center mx-auto shadow hover:bg-accent/90 transition border border-accent/20">
                            <Phone size={17} />Contact
                        </button>
                    </Link>
                </div>

                {/* Divider */}
                <div className=" mt-16 border-t border-accent/20"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 px-4 text-center md:text-left">

                    {/* Logo */}
                    <p className="flex items-center gap-2 text-lg font-semibold mb-4 md:mb-0">
                        <img src={logo} className="w-5.5" alt="" /> Saif Uddin
                    </p>

                    {/* Social Icons */}
                    <div className="flex text-purple-400 backdrop-blur-md  items-center gap-6 mx-auto">
                        <a className="hover:scale-110 transition duration-500 hover:text-accent" href="#" target="_balnk">
                            <Instagram size={24} />
                        </a>
                        <a className="hover:scale-110 transition duration-500 hover:text-accent" href="#" target="_balnk">
                            <Linkedin size={24} />
                        </a>
                        <a className="hover:scale-110 transition duration-500 hover:text-accent" href="#" target="_balnk">
                            <GithubIcon size={24} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-accent/60 mt-4 md:mt-0">
                        © {new Date().getFullYear()} Saif Uddin. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
