'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Definisi interface untuk tipe data particle
interface Particle {
  id: number;
  width: number;
  height: number;
  top: string;
  left: string;
  opacity: number;
  duration: number;
  delay: number;
}

// Definisi interface untuk tipe data shape
interface Shape {
  id: number;
  width: number;
  height: number;
  top: string;
  left: string;
  className: string;
  duration: number;
  delay: number;
}

const CTASection = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    // Generate particles only on client-side to avoid hydration issues
    const generateParticles = () => {
      return Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.3 + 0.05,
        duration: Math.random() * 8 + 4,
        delay: Math.random() * 4
      }));
    };

    // Generate shapes
    const generateShapes = () => {
      const shapeTypes = ['rounded-md', 'rounded-full', 'rounded-sm'];
      const rotateOptions = ['', 'rotate-45'];
      
      return Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        width: Math.random() * 50 + 15,
        height: Math.random() * 50 + 15,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        className: `${shapeTypes[Math.floor(Math.random() * shapeTypes.length)]} ${rotateOptions[Math.floor(Math.random() * rotateOptions.length)]}`,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 5
      }));
    };

    setParticles(generateParticles());
    setShapes(generateShapes());
  }, []);

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Pengalaman Berharga",
      description: "Dapatkan pengalaman dan wawasan berharga dalam dunia kewirausahaan"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Jaringan Luas",
      description: "Bangun relasi dengan mentor, investor, dan pelaku industri terkemuka"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sertifikasi",
      description: "Mendapatkan sertifikat resmi yang diakui untuk portofolio karir Anda"
    }
  ];

  return (
    <section className="relative py-36 overflow-hidden">
      {/* Gradient background dengan warna yang lebih kaya */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      
      {/* Wave shapes at top dengan efek yang lebih halus */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="absolute top-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white opacity-[0.08]"
          ></path>
        </svg>
        <svg className="absolute top-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white opacity-[0.04]"
            transform="rotate(180 600 60)"
          ></path>
        </svg>
      </div>
      
      {/* Animated particles dengan variasi yang lebih menarik */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={`star-${particle.id}`}
            className="absolute rounded-full bg-blue-200"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              opacity: particle.opacity
            }}
            animate={{
              opacity: [particle.opacity, particle.opacity * 6, particle.opacity],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
      </div>
      
      {/* Light effect dengan ukuran yang lebih besar */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-1/4 w-[60%] h-[60%] bg-blue-500 rounded-full filter blur-[180px] opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 -left-1/4 w-[60%] h-[60%] bg-blue-400 rounded-full filter blur-[180px] opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-white">
        {/* Main CTA Section dengan desain yang lebih premium */}
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
              Siap Bergabung dengan Kompetisi?
            </h2>
            <div className="w-32 h-1.5 mx-auto mb-10 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Jadilah bagian dari perjalanan luar biasa dalam mengembangkan ide bisnis Anda bersama kompetisi ini!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="https://s.id/Pendaftaran-NBPC-UNISNU-2025" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative overflow-hidden px-16 py-6 rounded-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-bold text-xl shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 group"
            >
              <motion.span
                className="relative z-10 inline-block w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Daftar Sekarang
              </motion.span>
              
              {/* Animated shine effect yang lebih dinamis */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: "easeInOut"
                }}
              />
              
              {/* Tambahkan glow effect */}
              <motion.span 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 40px 5px rgba(255, 255, 255, 0.4)'
                }}
              />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Benefits Cards dengan desain yang lebih premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            >
              <motion.div 
                className="relative p-10 h-full rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden group-hover:bg-white/15 transition-all duration-500 flex flex-col"
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Card glow effect yang lebih halus */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-40 blur transition-all duration-500 group-hover:blur-xl"></div>
                
                {/* Content dengan layout yang lebih premium */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="bg-blue-600/20 p-5 rounded-xl w-20 h-20 mb-8 flex items-center justify-center text-blue-200 group-hover:text-blue-100 transition-colors duration-300 backdrop-blur-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-blue-100/90 flex-grow text-lg font-light">{benefit.description}</p>
                  
                  {/* Bottom animated arrow */}
                  <div className="mt-8 overflow-hidden h-6">
                    <motion.div
                      className="text-blue-200 flex items-center font-medium"
                      initial={{ y: 30 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="mr-3">Pelajari Lebih Lanjut</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection; 