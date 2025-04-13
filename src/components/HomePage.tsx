import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { SceneSetup } from "./SceneSetup";
import { PhysicsObjects } from "./physicsobj";

import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const buttons = [
    { name: "Introduction", path: "/intro" },
    { name: "Projects", path: "/project" },
    { name: "Our Team", path: "/Team" },
    { name: "Moments", path: "/moments" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        shadows
        camera={{ position: [8, 4, 8], fov: 50 }} // Better viewing angle
      >
        {/* Warm dim yellow lighting */}
        <ambientLight
          color="#ffcc88" // Warm yellow ambient
          intensity={1.4} // Slightly stronger for visibility
        />

        <directionalLight
          position={[5, 8, 5]} // Lower and closer
          color="#ffdd99" // Soft yellow
          intensity={1.8} // Reduced intensity
          castShadow
          shadow-mapSize={[1024, 1024]} // Lower resolution for performance
          shadow-bias={-0.001} // Reduces shadow artifacts
        />

        {/* Add a visible "lamp" point light source */}

        <Environment preset="dawn" />
        <SceneSetup />
        <PhysicsObjects />
      </Canvas>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        <PhysicsObjects />
      </Canvas>

      {/* Buttons */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "10px",
          zIndex: 10,
          padding: "8px",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          background: "rgba(10, 20, 30, 0.3)", // More transparent dark blue
          border: "1px solid rgba(0, 255, 255, 0.2)",
        }}
      >
        {buttons.map((button) => (
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
      </div>

      {/* Title */}
      <h1
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          color: "white",
          fontSize: "28px",
          fontWeight: "300",
          margin: "0",
          letterSpacing: "4px",
          textShadow: `
      0 0 10px #fff,
      0 0 20px #00ffff,
      0 0 30px #0080ff
    `,
          zIndex: "10",
          fontFamily: "'Orbitron', sans-serif", // Add this font via Google Fonts
        }}
      >
        PHYSICS SOCIETY
      </h1>

      <h2
        style={{
          position: "absolute",
          top: "90px",
          left: "40px",
          color: "white",
          fontSize: "28px",
          fontWeight: "300",
          margin: "0",
          letterSpacing: "4px",
          textShadow: `
      0 0 10px #fff,
      0 0 20px #00ffff,
      0 0 30px #0080ff
    `,
          zIndex: "10",
          fontFamily: "'Orbitron', sans-serif", // Add this font via Google Fonts
        }}
      >
        University Of Ruhuna
      </h2>
    </div>
  );
};
