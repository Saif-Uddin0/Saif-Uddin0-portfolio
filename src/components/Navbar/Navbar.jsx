import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Star from '../../assets/Star 1.png';
import { FileUser, X } from 'lucide-react';

const Navbar = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const links = (
        <>
            <li>
                <NavLink to="/" onClick={() => setOpenSidebar(false)}
                    className={({ isActive }) =>
                        `px-5 py-2.5 rounded-full transition-all duration-500 ${isActive
                            ? "bg-white text-black"
                            : "text-white hover:text-white/80"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/about" onClick={() => setOpenSidebar(false)}
                    className={({ isActive }) =>
                        `px-5 py-2.5 rounded-full transition-all duration-300 ${isActive
                            ? "bg-white text-black"
                            : "text-white hover:text-white/80"
                        }`
                    }
                >
                    About
                </NavLink>
            </li>

            <li>
                <NavLink to="/contact" onClick={() => setOpenSidebar(false)}
                    className={({ isActive }) =>
                        `px-5 py-2.5 rounded-full transition-all duration-300 ${isActive
                            ? "bg-white text-black"
                            : "text-white hover:text-white/80"
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-300/95 z-20 p-0.5">
            <div className="navbar  container mx-auto">

                {/* Mobile menu button */}
                <div className="navbar-start">
                    <button
                        onClick={() => setOpenSidebar(true)}
                        className="btn btn-ghost md:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <a className="text-lg flex items-center gap-2.5 text-accent font-bold">
                        <img src={Star} className='w-6' alt="" />
                        SAIF UDDIN
                    </a>
                </div>

                {/* Desktop menu */}
                <div className="navbar-center hidden md:flex">
                    <ul className="flex gap-10 bg-accent/20 backdrop-blur-xl rounded-full text-accent py-2.5 font-semibold">
                        {links}
                    </ul>
                </div>

                {/* Resume Button */}
                <div className="navbar-end">
                    <a
                        href="#"
                        target="_blank"
                        className="bg-primary text-accent backdrop-blur-md px-4 py-2.5 shadow  rounded-full text-sm font-medium"
                    >
                        <span className='flex items-center gap-1'>Resume <FileUser size={18} /></span>
                    </a>
                </div>
            </div>

            {/* ========== SIDEBAR ========== */}
            <div
                className={`${openSidebar ? "fixed inset-0 bg-base-300/50 backdrop-blur-sm " : "hidden"}`}
                onClick={() => setOpenSidebar(false)}
            ></div>

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-base-300/95 backdrop-blur-xl text-white z-30 transform transition-transform duration-300
                ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setOpenSidebar(false)}>
                        <X size={26} className="text-white" />
                    </button>
                </div>

                <ul className="menu p-5 space-y-3">
                    {links}

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
