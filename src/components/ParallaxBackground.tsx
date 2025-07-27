import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Slow moving background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent-aqua/20 to-accent-lavender/20 blur-3xl floating-element" />
        <div className="absolute top-80 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-accent-coral/20 to-accent-gold/20 blur-3xl floating-element-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-accent-lavender/20 to-accent-aqua/20 blur-2xl floating-element" />
      </div>

      {/* Medium speed elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-60 right-10 w-20 h-20 rounded-full bg-accent-coral/30 blur-xl floating-element" />
        <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-accent-aqua/30 blur-xl floating-element-delayed" />
        <div className="absolute top-1/3 left-1/2 w-16 h-16 rounded-full bg-accent-lavender/30 blur-xl floating-element" />
      </div>

      {/* Fast moving foreground elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-40 left-1/3 w-12 h-12 rounded-full bg-accent-gold/40 blur-lg floating-element" />
        <div className="absolute bottom-60 right-1/4 w-18 h-18 rounded-full bg-accent-coral/40 blur-lg floating-element-delayed" />
        <div className="absolute top-2/3 right-1/3 w-14 h-14 rounded-full bg-accent-aqua/40 blur-lg floating-element" />
      </div>
    </div>
  );
};

export default ParallaxBackground;