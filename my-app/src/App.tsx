import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/emiCalculator.tsx";
import About from "./pages/aboutUs.tsx";
import Blog from "./pages/blog.tsx";
import Features from "./pages/features.tsx";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;
