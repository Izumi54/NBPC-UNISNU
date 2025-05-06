'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import FadeInSection from '@/components/animations/FadeInSection';

const TimelineSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client-side to avoid hydration issues
    const generateParticles = () => {
      return Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        width: Math.random() * 5 + 1,
        height: Math.random() * 5 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.15 + 0.05
      }));
    };

    setParticles(generateParticles());
  }, []);

  const timelineEvents = [
    {
      month: "1 - 15 Agustus 2025",
      title: "Pendaftaran",
      description: "Registrasi tim dan ide bisnis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      month: "20 Agustus 2025",
      title: "Pengumuman",
      description: "Pengumuman tim yang lolos seleksi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      month: "25 Agustus 2025",
      title: "Technical Meeting BMC",
      description: "Pembekalan penyusunan BMC",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      month: "10 September 2025",
      title: "Final BMC",
      description: "Presentasi Business Model Canvas",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      month: "20 September 2025",
      title: "Pengumpulan Proposal",
      description: "Submit proposal bisnis lengkap",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      month: "1 Oktober 2025",
      title: "Penentuan 6 Besar",
      description: "Seleksi 6 tim finalis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      month: "15 Oktober 2025",
      title: "Presentasi Tim",
      description: "Presentasi final di hadapan juri",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      month: "20 Oktober 2025",
      title: "Final Juara",
      description: "Pengumuman pemenang kompetisi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-36 relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Title section */}
      <div className="container-custom mb-24">
        <AnimatedTitle
          title="Jadwal Kompetisi"
          subtitle="Ikuti perjalanan kompetisi bisnis kami dari awal hingga pengumuman pemenang"
          center={true}
        />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Info message for mobile */}
      <div className="md:hidden container-custom mb-8">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-sm">
          <p className="font-medium">Timeline dapat dilihat pada tampilan desktop</p>
        </div>
      </div>
      
      {/* Timeline section - Hidden on mobile */}
      <div className="hidden md:block container-custom relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full"></div>
        
        {/* Timeline events */}
        {timelineEvents.map((event, index) => (
          <FadeInSection key={index} threshold={0.3}>
            <div className={`flex items-center mb-32 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <motion.div
                  className="mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-lg font-medium text-blue-500">{event.month}</span>
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold mb-3 text-blue-900"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {event.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-blue-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {event.description}
                </motion.p>
              </div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg relative z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  {event.icon}
                  
                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                    style={{ zIndex: -1 }}
                  />
                </motion.div>
              </div>
              
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
            </div>
          </FadeInSection>
        ))}
      </div>
      
      {/* Completely hide mobile timeline */}
      <div className="md:hidden">
        {/* Timeline benar-benar disembunyikan pada mobile */}
      </div>
    </section>
  );
};

export default TimelineSection; 