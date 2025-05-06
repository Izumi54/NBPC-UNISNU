'use client';

import { FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';
import AnimatedCard from '../animations/AnimatedCard';
import AnimatedTitle from '../animations/AnimatedTitle';

const HighlightsSection = () => {
  const highlightItems = [
    {
      icon: <FiAward size={40} className="text-primary-blue" />,
      title: 'Kompetisi Bisnis Nasional',
      description: 'Ajang kompetisi bisnis terbesar dengan peserta dari seluruh Indonesia'
    },
    {
      icon: <FiUsers size={40} className="text-primary-purple" />,
      title: 'Jaringan Luas',
      description: 'Kesempatan untuk bertemu dengan investor, mentor, dan pelaku bisnis sukses'
    },
    {
      icon: <FiTrendingUp size={40} className="text-primary-blue" />,
      title: 'Pengembangan Keterampilan',
      description: 'Tingkatkan kemampuan presentasi, analisis bisnis, dan leadership Anda'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <AnimatedTitle
          title="Peluang Inovasi"
          subtitle="Kompetisi bisnis prestisius yang bertujuan untuk mendorong semangat kewirausahaan di kalangan mahasiswa se-Indonesia."
          align="center"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightItems.map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-6 p-4 rounded-full bg-light-gray">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-dark-gray/70">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection; 