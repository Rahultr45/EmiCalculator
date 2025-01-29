import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const backgroundVideo = "src/assets/bg-video/bg-video-three.mp4";

createRoot(document.getElementById("root")!).render(
  <div className="relative min-h-screen overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className=" z-0 w-fill h-fill object-cover fixed hidden lg:block"
      src={backgroundVideo}
    />
    <div className="relative z-10">
      <StrictMode>
        <Header />
        <App />
        <Footer />
      </StrictMode>
    </div>
  </div>
);