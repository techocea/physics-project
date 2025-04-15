import {useNavigate} from "react-router-dom";
import React from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/intro" },
        { name: "Events", path: "/events" },
        { name: "News", path: "/news" },
        { name: "Magazine", path: "/magazine" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="p-4 md:p-5 lg:max-w-6xl lg:w-full flex justify-between">
            <div className="text-white text-lg font-medium m-0 tracking-[4px]" style={{
                textShadow: `
      0 0 10px #fff,
      0 0 20px #00ffff,
      0 0 30px #0080ff
    `,
                fontFamily: "'Orbitron', sans-serif",
            }}>
                PHYSICS SOCIETY<br/>University Of Ruhuna
            </div>
        <nav className="hidden lg:flex gap-10">
            {navLinks.map((button) => (
                <button
                    key={button.name}
                    style={{
                        padding: "10px 20px",
                        background: "rgba(0, 180, 255, 0.15)",
                        color: "rgba(200, 255, 255, 0.9)",
                        border: "1px solid rgba(0, 255, 255, 0.3)",
                        borderRadius: "12px",
                        fontSize: "14px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        backdropFilter: "blur(4px)",
                        transform: "translateY(0)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0, 200, 255, 0.3)";
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                            "0 4px 8px rgba(0, 200, 255, 0.2)";
                        e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(0, 180, 255, 0.15)";
                        e.currentTarget.style.color = "rgba(200, 255, 255, 0.9)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
                        e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.3)";
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                            "0 2px 4px rgba(0, 200, 255, 0.1)";
                    }}
                    onClick={() => navigate(button.path)}
                >
                    {button.name}
                </button>
            ))}
        </nav>
    </header>
    )
}
