'use client';

import { cn } from "@/lib/utils";
import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles-container');
        
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle size-[1.2px] absolute bg-white/80';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 0.1}s`;
      particlesContainer?.appendChild(particle);
          
      setTimeout(() => particle.remove(), 10000);
    };
    
    const intervalId = setInterval(createParticle, 50);
    return () => clearInterval(intervalId);
  }, []);
      
  return (
    <div className={cn("particles-container absolute -top-0 left-1/2 w-14 h-[400px] transform -translate-x-1/2 bg-gradient-to-b")} />
  );
};

export default Particles;