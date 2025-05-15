'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiDownload, FiCalendar, FiMapPin } from 'react-icons/fi';

const PamphletSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background dengan pola */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] z-0"></div>
      
      {/* Pola dekoratif */}
      {isMounted && (
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 10 + 5;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary-blue"
                style={{ 
                  width: `${size}px`, 
                  height: `${size}px`, 
                  top: `${top}%`, 
                  left: `${left}%` 
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: delay 
                }}
              />
            );
          })}
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            NBP Competition 2025
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Bergabunglah dalam kompetisi bisnis plan tingkat nasional dan wujudkan ide bisnismu!
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Pamflet */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateY: 10 }}
            animate={{ 
              opacity: isImageLoaded ? 1 : 0, 
              y: isImageLoaded ? 0 : 20,
              rotateY: isImageLoaded ? 0 : 10
            }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-sm shadow-2xl rounded-lg overflow-hidden"
            style={{ 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
              transform: 'perspective(1000px)' 
            }}
            whileHover={{ rotateY: -5, scale: 1.02 }}
          >
            <div className="relative w-full h-auto aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/pamflet_2025.jpg"
                alt="NBPC 2025 Pamflet"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                onLoadingComplete={() => setIsImageLoaded(true)}
                priority
              />
            </div>
          </motion.div>

          {/* Detail Informasi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Informasi Kompetisi</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                  <FiCalendar size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Jadwal Penting</h4>
                  <p className="text-gray-600">Pendaftaran: 15 Mei - 30 Juni 2025</p>
                  <p className="text-gray-600">Final & Awarding: 23 Juli 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Tempat Pelaksanaan</h4>
                  <p className="text-gray-600">Auditorium UNISNU</p>
                  <p className="text-gray-600">Jepara, Jawa Tengah</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://s.id/LinkPendaftaranNBPC"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center px-6 py-3 font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md hover:shadow-lg transition-all flex-1 flex items-center justify-center gap-2"
              >
                <FiDownload /> Download Booklet
              </motion.a>
              
              <motion.a
                href="/lomba"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center px-6 py-3 font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-2 flex-1"
              >
                Lihat Detail
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PamphletSection; 