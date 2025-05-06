'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Komponen untuk efek tetesan hujan
const RainDroplet = ({ delay, duration, left, size }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-400/20 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: "-20px",
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: ["0%", "100%"],
        opacity: [0, 1, 0],
        scale: [1, 0.8]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Komponen untuk genangan air reflektif
const WaterPuddle = ({ scale, left, top, opacity }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-b from-blue-400/10 to-blue-400/5 backdrop-blur-sm"
      style={{
        width: `${scale * 120}px`,
        height: `${scale * 40}px`,
        left: `${left}%`,
        top: `${top}%`,
        transform: 'translateX(-50%)',
        opacity: opacity
      }}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [opacity, opacity * 1.2, opacity]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

// Komponen untuk menciptakan efek kabut tipis
const MistEffect = () => {
  const mistLayers = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    opacity: 0.03 + (i * 0.01),
    scale: 1 + (i * 0.2),
    speed: 120 - (i * 25)
  }));

  return (
    <>
      {mistLayers.map((layer) => (
        <motion.div
          key={layer.id}
          className="absolute inset-0 bg-gradient-to-b from-white/5 to-blue-200/5"
          style={{ opacity: layer.opacity }}
          animate={{ 
            y: [0, -10, 0],
            opacity: [layer.opacity, layer.opacity * 1.5, layer.opacity]
          }}
          transition={{
            duration: layer.speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// Efek partikel mengambang seperti tetes air kecil
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1, // 1-5px
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10, // 10-25s
    delay: Math.random() * 2,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-300/30"
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

// Efek kilau seperti air basah
const ShinyEffect = ({ className = "" }) => {
  return (
    <motion.div 
      className={`absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/5 to-transparent ${className}`}
      animate={{
        backgroundPosition: ["200% 200%", "0% 0%", "200% 200%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    />
  );
};

// Komponen utama untuk efek hujan
const RainEffect = ({ children, intensity = 'medium' }) => {
  // Jumlah tetesan hujan berdasarkan intensitas
  const dropCount = intensity === 'light' ? 8 : intensity === 'medium' ? 15 : 25;
  const puddleCount = intensity === 'light' ? 4 : intensity === 'medium' ? 8 : 12;
  
  // Membuat array tetesan hujan
  const raindrops = Array.from({ length: dropCount }).map((_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: Math.random() * 5 + 3,
    left: Math.random() * 100,
    size: Math.random() * 15 + 5
  }));

  // Membuat array genangan air
  const puddles = Array.from({ length: puddleCount }).map((_, i) => ({
    id: i,
    scale: Math.random() * 1.5 + 0.5,
    left: Math.random() * 100,
    top: 70 + Math.random() * 20,
    opacity: 0.1 + Math.random() * 0.1
  }));

  return (
    <div className="relative overflow-hidden">
      {/* Kabut tipis */}
      <MistEffect />
      
      {/* Tetesan hujan */}
      {raindrops.map((drop) => (
        <RainDroplet 
          key={drop.id}
          delay={drop.delay}
          duration={drop.duration}
          left={drop.left}
          size={drop.size}
        />
      ))}
      
      {/* Genangan air dengan efek refleksi */}
      {puddles.map((puddle) => (
        <WaterPuddle 
          key={puddle.id}
          scale={puddle.scale}
          left={puddle.left}
          top={puddle.top}
          opacity={puddle.opacity}
        />
      ))}
      
      {/* Partikel mengambang */}
      <FloatingParticles />
      
      {/* Efek gradien tambahan */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[60%] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,181,239,0.3) 0%, rgba(0,102,255,0.1) 70%, rgba(0,0,0,0) 100%)',
        }}
        animate={{ 
          y: [10, -10, 10],
          scale: [1, 1.03, 1],
        }} 
        transition={{ 
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Konten yang dibungkus oleh efek hujan */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { RainEffect, ShinyEffect, RainDroplet, WaterPuddle, MistEffect }; 