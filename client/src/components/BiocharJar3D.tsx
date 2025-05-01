import React, { useEffect, useRef } from 'react';

interface BiocharJar3DProps {
  className?: string;
}

const BiocharJar3D: React.FC<BiocharJar3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (container && glow) {
      let rotation = 0;
      const animateJar = () => {
        rotation += 0.5;
        container.style.transform = `rotateY(${rotation}deg)`;
        // Sync glow rotation with jar rotation
        glow.style.transform = `rotateY(${rotation}deg)`;
        requestAnimationFrame(animateJar);
      };
      
      animateJar();
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <div className={`absolute top-4 right-4 z-10 w-24 h-24 md:w-32 md:h-32 [perspective:500px] ${className}`}>
      {/* Glow Effect */}
      <div 
        ref={glowRef}
        className="absolute inset-0 rounded-full bg-biocharGreen/30 blur-xl opacity-70 [transform-style:preserve-3d]"
        style={{
          animation: 'pulse 3s ease-in-out infinite',
          transform: 'translateZ(-20px)'
        }}
      />
      
      {/* Jar Container */}
      <div 
        ref={containerRef} 
        className="relative w-full h-full rounded-lg overflow-hidden border-4 border-white shadow-lg [transform-style:preserve-3d]"
        style={{
          animation: 'float 2s ease-in-out infinite'
        }}
      >
        <img 
          src="/images/products/jar.webp" 
          alt="Biochar Jar" 
          className="relative z-10 w-full h-full object-contain"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
      </div>
      
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.7;
              transform: scale(0.95);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BiocharJar3D;