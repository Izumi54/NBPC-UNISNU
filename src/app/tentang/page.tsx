'use client';

import { motion } from 'framer-motion';
import AboutHeroSection from '@/components/tentang/HeroSection';
import TimelineSection from '@/components/tentang/TimelineSection';
import CTASection from '@/components/tentang/CTASection';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import FadeInSection from '@/components/animations/FadeInSection';
import AnimatedCard from '@/components/animations/AnimatedCard';
import { FiTarget, FiMap, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import TeamSection from '@/components/tentang/TeamSection';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Visi Misi Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        {/* Subtle patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <svg width="100%" height="100%" className="absolute opacity-[0.02]">
            <pattern id="pattern-hexagons" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <path id="hexagon" d="M25 2.5l19.1 11v22.2L25 46.8 5.9 35.7V13.5L25 2.5z" strokeWidth="1" stroke="currentColor" fill="none" className="text-blue-600"></path>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-hexagons)"></rect>
          </svg>
          
          <div className="absolute left-10 top-64 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply opacity-5"></div>
          <div className="absolute right-10 top-32 w-72 h-72 rounded-full bg-blue-300 mix-blend-multiply opacity-5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedTitle
            title="Visi & Misi"
            subtitle="Menginspirasi inovasi dan mendukung pertumbuhan ekosistem kewirausahaan"
            align="center"
            className="mb-16"
            textColor="text-gray-800"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeInSection direction="right">
              <div className="h-full bg-white shadow-md rounded-lg p-8 border border-blue-100 relative">
                {/* Subtle accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-blue-50 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 relative inline-block">
                    <span>Visi</span>
                    <div className="h-1 w-full bg-blue-100 mt-1 rounded-full"></div>
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                      Menjadi platform kompetisi bisnis terdepan yang mendorong pertumbuhan ekosistem startup dan menumbuhkan semangat kewirausahaan di kalangan generasi muda Indonesia.
                    </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={0.2}>
              <div className="h-full bg-white shadow-md rounded-lg p-8 border border-blue-100 relative">
                {/* Subtle accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-blue-50 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 relative inline-block">
                    <span>Misi</span>
                    <div className="h-1 w-full bg-blue-100 mt-1 rounded-full"></div>
                  </h3>
                  
                  <ul className="text-gray-600 leading-relaxed text-left space-y-4">
                    {[
                      "Memfasilitasi pengembangan ide bisnis inovatif dari mahasiswa",
                      "Menyediakan mentoring dan pendampingan berkualitas untuk peserta",
                      "Menciptakan jaringan antara mahasiswa, pelaku bisnis, dan investor",
                      "Mendukung tumbuhnya ekosistem startup di Indonesia"
                    ].map((item, index) => (
                      <li 
                        key={index} 
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-semibold">{index + 1}</span>
                          </div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Kami Section */}
      <section className="py-24 bg-blue-100 relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <svg width="100%" height="100%" className="absolute opacity-[0.02]">
            <pattern id="pattern-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-dot" cx="15" cy="15" r="2" fill="currentColor" className="text-blue-700"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-dots)"></rect>
          </svg>
          
          <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply opacity-5"></div>
          <div className="absolute -right-20 top-2/3 w-80 h-80 rounded-full bg-blue-500 mix-blend-multiply opacity-5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedTitle
            title="Nilai-Nilai Kami"
            subtitle="Prinsip yang kami junjung tinggi dalam menjalankan kompetisi"
            align="center"
            className="mb-16"
            textColor="text-gray-800"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Integritas",
                description: "Kami menjalankan kompetisi dengan standar yang tinggi, transparan, dan adil bagi seluruh peserta",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                ),
                title: "Kolaborasi",
                description: "Kami mendorong kerjasama antar peserta, mentor, dan stakeholder untuk menciptakan ekosistem yang berdampak",
                color: "text-blue-700",
                bgColor: "bg-blue-50"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                ),
                title: "Inovasi",
                description: "Kami mendukung terobosan ide dan solusi kreatif yang dapat memberikan dampak positif pada masyarakat",
                color: "text-blue-800",
                bgColor: "bg-blue-50"
              }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center h-full">
                  <div className={`${item.bgColor} p-4 rounded-full mb-6`}>
                    <div className={`${item.color}`}>{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        {/* Subtle patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <svg width="100%" height="100%" className="absolute opacity-[0.02]">
            <pattern id="pattern-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <path d="M0 20 H40 M20 0 V40" strokeWidth="1" stroke="currentColor" fill="none" className="text-blue-600"></path>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines)"></rect>
          </svg>
          
          <div className="absolute left-1/4 bottom-0 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply opacity-5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedTitle
            title="Sejarah NBPC"
            subtitle="Perjalanan kompetisi bisnis terdepan di Indonesia"
            align="center"
            className="mb-16"
            textColor="text-gray-800"
          />

          <FadeInSection>
            <div 
              className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-sm border border-gray-100 relative mb-16"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                National Business Plan Competition (NBPC) pertama kali diadakan pada tahun 2024 dengan antusiasme yang luar biasa dari mahasiswa seluruh Indonesia. Kompetisi ini menjadi wadah bagi mahasiswa untuk mengembangkan ide bisnis inovatif mereka dan mendapatkan masukan berharga dari para profesional industri.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Pada tahun 2025 ini, NBPC memasuki penyelenggaraan kedua dengan berbagai penyempurnaan dan inovasi baru. Kami berkomitmen untuk terus mendorong semangat kewirausahaan dan inovasi di kalangan generasi muda Indonesia.
              </p>
            </div>
          </FadeInSection>
          
          {/* Galeri foto NBPC tahun sebelumnya */}
          <AnimatedTitle
            title="Galeri NBPC 2024"
            subtitle="Momen berkesan dari penyelenggaraan pertama"
            align="center"
            className="mb-12"
            textColor="text-gray-800"
          />
          
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="col-span-1 space-y-6">
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg relative h-64"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/sejarah/WhatsApp Image 2025-05-15 at 02.06.11 (2).jpeg"
                    alt="NBPC 2024 - Sesi Presentasi"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg relative h-52"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/sejarah/WhatsApp Image 2025-05-15 at 02.06.10.jpeg"
                    alt="NBPC 2024 - Kelompok Peserta"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              </div>
              
              <div className="col-span-1 space-y-6">
                <motion.div
                  className="rounded-lg overflow-hidden shadow-lg relative h-72"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/sejarah/WhatsApp Image 2025-05-15 at 02.06.11 (1).jpeg"
                    alt="NBPC 2024 - Presentasi Tim"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg relative h-44"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/sejarah/WhatsApp Image 2025-05-15 at 02.06.09.jpeg"
                    alt="NBPC 2024 - Diskusi Tim"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              </div>
              
              <div className="col-span-1 space-y-6">
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg relative h-56"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/sejarah/WhatsApp Image 2025-05-15 at 02.06.11.jpeg"
                    alt="NBPC 2024 - Awarding Ceremony"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg relative h-60"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/sejarah/WhatsApp Image 2025-05-15 at 02.06.09 (1).jpeg"
                    alt="NBPC 2024 - Penyerahan Hadiah"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Tim Section */}
      <TeamSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
} 