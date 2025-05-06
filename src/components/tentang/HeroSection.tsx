'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  const scrollToVisiMisi = () => {
    // Coba cari element dengan id visi-misi
    const visiMisiSection = document.getElementById('visi-misi');
    
    if (visiMisiSection) {
      visiMisiSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: cari section berikutnya setelah hero section
      const heroSection = sectionRef.current;
      if (heroSection) {
        const nextSection = heroSection.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      
      // Fallback kedua: cari semua section dan scroll ke section kedua
      const allSections = document.querySelectorAll('section');
      if (allSections.length > 1) {
        allSections[1].scrollIntoView({ behavior: 'smooth' });
        return;
      }
      
      // Fallback ketiga: gunakan window.scrollTo untuk scroll ke bawah
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Generate particles only on client-side to avoid hydration issues
    const generateParticles = () => {
      return Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.15 + 0.05,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 2,
        offset: Math.random() * 30 - 15
      }));
    };

    setParticles(generateParticles());
    setIsVisible(true);

    // Intersection Observer untuk animasi scroll-based
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Modern gradient background dengan efek depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 z-0">
        {/* Subtle texture overlay untuk kesan premium */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      
        {/* Dynamic gradient overlay dengan animasi halus */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-900/30"
          animate={{
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Elegant particles dengan efek floating */}
      <div className="absolute inset-0 z-1">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-blue-50"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
              filter: "blur(0.5px)"
            }}
            animate={{
              y: [0, particle.offset],
              x: [0, particle.offset/2],
              opacity: [particle.opacity, particle.opacity * 2, particle.opacity]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Strategic light accents untuk kedalaman visual */}
      <div className="absolute top-1/3 -right-[20%] w-[50rem] h-[50rem] rounded-full bg-blue-400 opacity-8 blur-[150px]"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[40rem] h-[40rem] rounded-full bg-blue-500 opacity-8 blur-[150px]"></div>
      
      {/* Premium geometric elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute w-[40rem] h-[40rem] border border-blue-300/10 rounded-full -top-[5%] -right-[10%]"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.03, 1]
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute w-[35rem] h-[35rem] border border-blue-400/5 rounded-full bottom-[0%] -left-[5%]"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute w-80 h-80 border border-blue-300/8 rotate-45 top-[20%] left-[10%]"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.02, 1]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
      </div>
      
      {/* Modern wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-36 overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
            className="fill-blue-900/10"
          />
        </svg>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,120 C150,80 350,40 600,90 C850,140 1050,110 1200,80 L1200,120 L0,120 Z" 
            className="fill-blue-950/15"
          />
        </svg>
      </div>
      
      {/* Main content container dengan layout yang lebih terstruktur */}
      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left column for illustration on larger screens */}
          <motion.div
            className="hidden md:flex md:col-span-2 justify-center items-center h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-full blur-2xl"></div>
              <motion.div 
                className="relative h-full w-full flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative h-[350px] w-[350px] rounded-full overflow-hidden border-4 border-blue-300/20 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-800/30 text-blue-100 p-8">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="font-medium">Kolaborasi &amp; Inovasi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column for text content */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-100 text-sm font-medium mb-6 md:hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Tentang NBPC
              </motion.span>
              
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-50 via-white to-blue-100 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
              >
                <span className="block md:inline">Inovasi &amp;</span>
                <span className="block md:inline"> Kolaborasi</span>
                <span className="hidden md:inline ml-4 text-lg align-middle px-4 py-2 rounded-full bg-blue-600/20 text-blue-100 font-medium">Tentang NBPC</span>
              </motion.h1>
              
              <motion.div
                className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mb-8 rounded-full md:mx-0 mx-auto"
                initial={{ width: 0 }}
                animate={isVisible ? { width: 80 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              
              <motion.p
                className="text-base sm:text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed font-light md:pr-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Platform kompetisi bisnis terdepan yang mendorong inovasi dan kewirausahaan bagi generasi muda Indonesia melalui pendampingan berkualitas, jaringan profesional, dan peluang pendanaan.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#visi-misi"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToVisiMisi();
                }}
                className="group relative overflow-hidden px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span>Pelajari Lebih Lanjut</span>
                </span>
                
                {/* Glassmorphism hover effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
                
                {/* Animated highlight effect */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ['200% 50%', '-200% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '400% 100%',
                  }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 