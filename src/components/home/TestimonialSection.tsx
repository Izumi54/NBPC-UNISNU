'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import AnimatedTitle from '../animations/AnimatedTitle';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "NBPC memberikan saya pengalaman berharga untuk mengembangkan ide bisnis saya dan bertemu dengan para mentor yang luar biasa.",
      name: "Anisa Rahma",
      university: "Universitas Indonesia",
      position: "Juara 1 NBPC 2023"
    },
    {
      quote: "Berkat NBPC, startup saya mendapatkan pendanaan awal dan mendapat kesempatan untuk mentoring dari praktisi bisnis berpengalaman.",
      name: "Budi Santoso",
      university: "Institut Teknologi Bandung",
      position: "Juara 2 NBPC 2023"
    },
    {
      quote: "NBPC adalah platform yang sangat baik untuk mahasiswa yang ingin mendalami dunia bisnis dan startup. Saya belajar banyak dari kompetisi ini.",
      name: "Citra Dewi",
      university: "Universitas Gadjah Mada",
      position: "Juara 3 NBPC 2023"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoplay) {
      timer = setInterval(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <AnimatedTitle
          title="Testimoni Pemenang"
          subtitle="Dengarkan cerita sukses dari para pemenang NBPC sebelumnya"
          align="center"
          className="mb-16"
        />
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', damping: 15 }}
              className="bg-white rounded-lg shadow-soft p-10 text-center"
            >
              <FiMessageSquare className="mx-auto text-primary-purple mb-6" size={40} />
              <p className="text-xl italic mb-8 text-dark-gray/90">"{testimonials[current].quote}"</p>
              <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
              <p className="text-dark-gray/70">{testimonials[current].position}</p>
              <p className="text-primary-blue">{testimonials[current].university}</p>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-3 shadow-soft text-dark-gray hover:text-primary-blue"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-3 shadow-soft text-dark-gray hover:text-primary-blue"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrent(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === current ? 'bg-primary-blue' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;