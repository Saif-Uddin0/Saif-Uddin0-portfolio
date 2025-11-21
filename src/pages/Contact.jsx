import React from "react";
import { motion } from "framer-motion";
import bgImg from '.././assets/laptop-half-closed-dark-with-colourful-glow-glasses-paper-cup.jpg'
import Swal from "sweetalert2";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {


    const handleMessage = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your request has been sended",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-5 lg:px-0 "
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="backdrop-blur-md bg-black/40 w-full max-w-3xl rounded-2xl my-10 p-10 text-accent shadow-2xl"
            >
                <h2 className="text-center text-3xl font-bold mb-3">Contact Me</h2>
                <p className="text-center text-[#cfcfcf] text-sm ">
                    Are you looking for a new website? I can help you.
                    <br />
                    I'm always open to opportunities, collaborations, and new connections.
                </p>
                <div className="flex text-center   items-center justify-center gap-6 mx-auto mb-10 mt-3">
                    <a className="hover:scale-110 transition duration-500 hover:text-purple-500" href="https://www.linkedin.com/in/saif-uddin-a55139335/" target="_balnk">
                            <Linkedin size={24} />
                        </a>
                        <a className="hover:scale-110 transition duration-500 hover:text-purple-500" href="https://github.com/Saif-Uddin0?tab=repositories" target="_blank">
                            <GithubIcon size={24} />
                        </a>
                        <a   className="hover:scale-110 transition duration-500 hover:text-purple-500" href="https://www.instagram.com/__m_a__h__i_r__/" target="_balnk">
                            <Instagram size={24} />
                        </a>
                        
                    </div>

                

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Your Name *</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#6C63FF]"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Your Email *</label>
                        <input
                            type="email"
                            placeholder="info@example.com"
                            className="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#6C63FF]"
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Subject *</label>
                        <input
                            type="text"
                            placeholder="Website Design"
                            className="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#6C63FF]"
                        />
                    </div>

                    {/* Service */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Service *</label>
                        <select className="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#6C63FF]">
                            <option>Select a service</option>
                            <option>Web Development</option>
                            <option>UI/UX Design</option>
                            <option>Frontend Development</option>
                            <option>Backend Development</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 flex flex-col">
                        <label className="text-sm mb-1">Your Message *</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here..."
                            className="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#6C63FF]"
                        ></textarea>
                    </div>
                </form>

                {/* Button */}
                <div className="mt-8 text-center">
                    <button onClick={handleMessage} className="bg-[#6C63FF] hover:bg-[#584ee7] transition-all duration-300 px-8 py-3 rounded-lg font-medium shadow-lg">
                        Send Message
                    </button>
                </div>
            </motion.div>
        </div>
    );
}