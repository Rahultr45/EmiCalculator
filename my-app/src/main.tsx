import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from "./components/Header.tsx";
import bgImage from './assets/bg-image.jpg'
createRoot(document.getElementById('root')!).render(
  <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
    <StrictMode>
      <Header/>
      <App />
    </StrictMode>
  </div>
,
)
