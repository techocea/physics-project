import React from "react";
import { Canvas } from "@react-three/fiber";
import {Environment } from "@react-three/drei";
import { SceneSetup } from "./SceneSetup";
import { PhysicsObjects } from "./physicsobj";

export const HomePage = () => {

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
      </div>
  );
};
