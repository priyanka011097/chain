// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Academy from "./pages/Academy";
import Btrace from "./pages/Btrace";
import Bholder from "./pages/Bholder";
import RiskScore from "./pages/RiskScore";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-img">
      <div className="static-dot-bg">
        {Array.from({ length: 200 }, (_, i) => (
          <span key={i} className={`dot dot-${i}`} />
        ))}
      </div>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/btrace" element={<Btrace />} />
          <Route path="/bholder" element={<Bholder />} />
          <Route path="/riskscore" element={<RiskScore />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>

      {/* Dot styling */}
      <style>{`
        .static-dot-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.15); /* Higher visibility */
          border-radius: 50%;
        }

        ${Array.from({ length: 200 }, (_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return `.dot-${i} { top: ${top}%; left: ${left}%; }`;
        }).join("\n")}
      `}</style>
    </div>
  );
}

export default App;
