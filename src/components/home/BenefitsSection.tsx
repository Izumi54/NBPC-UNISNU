'use client';

import { FiAward, FiDollarSign, FiUsers, FiBookOpen } from 'react-icons/fi';
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
      icon: <FiDollarSign size={40} className="text-primary-purple" />,
      title: 'Peluang Pendanaan',
      description: 'Bertemu dengan investor potensial untuk ide bisnis Anda'
    },
    {
      icon: <FiUsers size={40} className="text-primary-blue" />,
      title: 'Networking',
      description: 'Perluas jaringan dengan peserta, juri, dan praktisi bisnis'
    },
    // {
    //   icon: <FiBookOpen size={40} className="text-primary-purple" />,
    //   title: 'Mentoring',
    //   description: 'Dapatkan bimbingan dari ahli bisnis dan entrepreneur sukses'
    // }
  ];

  return (
    <section className="section bg-light-gray">
      <div className="container-custom">
        <AnimatedTitle
          title="Manfaat Mengikuti NBPC"
          subtitle="Ikuti NBPC dan dapatkan berbagai keuntungan yang akan membantu pengembangan ide bisnis dan karir Anda ke depannya."
          align="center"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-6 p-4 rounded-full bg-white shadow-soft">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-dark-gray/70">{benefit.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <FadeInSection className="mt-16 bg-gradient-primary rounded-lg py-16 px-6 text-center">
          <h3 className="heading-md text-white mb-6">Siap mengubah ide bisnismu menjadi kenyataan?</h3>
          <a 
            href="https://s.id/LinkPendaftaranNBPC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block btn bg-white text-primary-blue hover:shadow-lg transform transition hover:-translate-y-1"
          >
            Daftar Sekarang
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BenefitsSection; 