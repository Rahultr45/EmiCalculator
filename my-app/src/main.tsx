import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
createRoot(document.getElementById("root")!).render(
  <div className="min-h-screen bg-cover bg-center">
    <StrictMode>
      <Header />
      <App />
      <Footer />
    </StrictMode>
  </div>
);
