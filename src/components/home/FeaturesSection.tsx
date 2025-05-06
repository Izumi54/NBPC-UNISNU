'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiUsers } from 'react-icons/fi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiTarget size={36} className="text-[#00B5EF]" />,
      title: 'Inovasi Bisnis',
      description: 'Kembangkan ide bisnis inovatif dan berkelanjutan'
    },
    {
      icon: <FiAward size={36} className="text-[#00B5EF]" />,
      title: 'Kompetisi Nasional',
      description: 'Unjuk kemampuan di tingkat nasional bersama peserta terbaik'
    },
    {
      icon: <FiUsers size={36} className="text-[#00B5EF]" />,
      title: 'Networking Profesional',
      description: 'Jalin koneksi dengan para profesional dan investor'
    }
  ];

  return (
    <section className="py-20 bg-[#050A24]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 rounded-full bg-[#0a1037] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#00B5EF]">{feature.title}</h3>
              <p className="text-white opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 