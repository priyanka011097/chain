// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Academy from './pages/Academy';
import Btrace from './pages/Btrace';
import Bholder from './pages/Bholder';
import RiskScore from './pages/RiskScore';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
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
  );
}

export default App;
