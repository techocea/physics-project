import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import  Magazine  from "./pages/magazine";
import { Contact } from "./pages/contact";
import Intro from "./pages/intro";
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
      <Route path="/intro" element={<Intro />} />
      <Route path="/events" element={<Events />} />
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
