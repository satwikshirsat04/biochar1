import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const GlobalBackground = () => (
  <div className="fixed inset-0 -z-50 overflow-hidden opacity-5 pointer-events-none">
    <svg 
      className="absolute bottom-0 w-full h-full wave-animate"
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
    >
      <path 
        fill="#155724" 
        fillOpacity="0.1" 
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
)

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalBackground />
    <App />
  </>
)