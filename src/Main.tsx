import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Projects } from "./pages/project";
import { Team } from "./pages/Team";
import  Moments  from "./pages/moments";
import { Contact } from "./pages/contact";
import Introduction from "./pages/intro";
import Navbar from "../components/Navbar";
import Events from "@/pages/events";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/intro" element={<Introduction />} />
      <Route path="/events" element={<Events />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/moments" element={<Moments />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
