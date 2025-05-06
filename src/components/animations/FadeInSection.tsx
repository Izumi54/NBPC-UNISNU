'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const FadeInSection = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: FadeInSectionProps) => {
  let initial = {};

  switch (direction) {
    case 'up':
      initial = { y: 50 };
      break;
    case 'down':
      initial = { y: -50 };
      break;
    case 'left':
      initial = { x: 50 };
      break;
    case 'right':
      initial = { x: -50 };
      break;
    default:
      initial = { y: 50 };
  }

  return (
    <motion.div
      className={className}
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection; 