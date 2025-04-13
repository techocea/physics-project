import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Introduction } from "./pages/intro";
import { Projects } from "./pages/project";
import { Team } from "./pages/Team";
import { Moments } from "./pages/moments";
import { Contact } from "./pages/contact";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
