// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Portfolio, Services, Contact } from "./pages";
import { AgriNext,Edusynx, MerExpress } from "./features/Projects";


function App() {
  return (
    <div className="m-16 text-white h-screen">
      <Routes>
        {/* Redirect root URL to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/projects/edusynx" element={<Edusynx />} />
        <Route path="/projects/agrinext" element={<AgriNext />} />
        <Route path="/projects/merexpress" element={<MerExpress />} />
      </Routes>
    </div>
  );
}

export default App;
