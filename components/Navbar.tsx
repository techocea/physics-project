import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/intro" },
        { name: "Events", path: "/events" },
        { name: "News", path: "/news" },
        { name: "Magazine", path: "/magazine" },
        { name: "Contact", path: "/contact" },
    ];

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <header className="p-4 md:p-5 w-full flex justify-between items-center relative z-50">
            <div
                className="text-white text-sm lg:text-lg font-medium tracking-[4px]"
                style={{
                    textShadow: `
                        0 0 10px #fff,
                        0 0 20px #00ffff,
                        0 0 30px #0080ff
                    `,
                    fontFamily: "'Orbitron', sans-serif",
                }}
            >
                PHYSICS SOCIETY<br />University Of Ruhuna
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-10">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => handleNavigate(link.path)}
                        className="px-4 py-2 text-sm rounded-xl font-medium backdrop-blur border border-cyan-300 text-cyan-100 hover:text-white hover:bg-cyan-500/20 hover:shadow-md transition-all"
                    >
                        {link.name}
                    </button>
                ))}
            </nav>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(true)} className="text-white">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                    >
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <motion.ul
                            className="space-y-8 text-white text-2xl font-semibold text-center"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.name}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <button
                                        onClick={() => handleNavigate(link.path)}
                                        className="hover:text-cyan-300 transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
