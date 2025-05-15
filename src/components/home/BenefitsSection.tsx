'use client';

import { FiAward, FiUsers, FiFileText } from 'react-icons/fi';
import AnimatedTitle from '../animations/AnimatedTitle';
import AnimatedCard from '../animations/AnimatedCard';
import FadeInSection from '../animations/FadeInSection';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FiAward size={40} className="text-primary-blue" />,
      title: 'Hadiah Besar',
      description: 'Total hadiah puluhan juta rupiah untuk para pemenang'
    },
    {
      icon: <FiFileText size={40} className="text-primary-purple" />,
      title: 'Sertifikasi',
      description: 'Mendapatkan sertifikat resmi yang diakui untuk portofolio karir Anda'
    },
    {
      icon: <FiUsers size={40} className="text-primary-blue" />,
      title: 'Networking',
      description: 'Perluas jaringan dengan peserta, juri, dan praktisi bisnis'
    }
  ];

  return (
    <section className="section bg-light-gray py-24">
      <div className="container-custom">
        <AnimatedTitle
          title="Manfaat Mengikuti NBPC"
          subtitle="Ikuti NBPC dan dapatkan berbagai keuntungan yang akan membantu pengembangan ide bisnis dan karir Anda ke depannya."
          align="center"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
                <div className="mb-8 p-5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 shadow-inner border border-blue-100">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-dark-gray/80 text-lg">{benefit.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <FadeInSection className="mt-20 bg-gradient-primary rounded-2xl py-16 px-8 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-2xl mx-auto">Siap mengubah ide bisnismu menjadi kenyataan?</h3>
          <a 
            href="https://s.id/LinkPendaftaranNBPC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-blue hover:shadow-lg transform transition hover:-translate-y-2 text-lg px-10 py-4 font-bold rounded-full"
          >
            Daftar Sekarang
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BenefitsSection; 