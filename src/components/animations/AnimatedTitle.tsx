'use client';

import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  textColor?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const AnimatedTitle = ({
  title,
  subtitle,
  className = '',
  textColor = 'text-dark-gray',
  align = 'left',
  size = 'lg',
}: AnimatedTitleProps) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  
  const titleClass = size === 'xl' 
    ? 'heading-xl' 
    : size === 'lg' 
    ? 'heading-lg' 
    : size === 'md' 
    ? 'heading-md' 
    : 'heading-sm';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`${className} ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className={`${titleClass} ${textColor} mb-4`}
        variants={childVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-dark-gray/80 max-w-2xl mx-auto"
          variants={childVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedTitle; 