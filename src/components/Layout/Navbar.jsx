'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Navigation Items stored in an Array
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/#about" },
        { name: "Services", path: "/#services" },
        { name: "Projects", path: "/#projects" },
        { name: "Skills", path: "/#skills" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/#contact" },
    ];

    return (
        <>
            <nav className={`max-md:hidden px-6 py-4 fixed left-0 right-0 bg-white z-[100] ${isScrolled ? "shadow-md" : ""}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center text-2xl text-indigo-600 shadow-md border font-bold justify-center">PP</div>
                            <span className="font-semibold text-2xl tracking-[.03rem]">Portfolio</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="group">
                                <Link href={item.path} className="text-gray-600 hover:text-indigo-400">
                                    {item.name}
                                </Link>
                                <div className="group-hover:bg-indigo-500 w-0 group-hover:w-full h-1 rounded-full transition-all duration-500 ease-in-out"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    );
};

export default Navbar;
