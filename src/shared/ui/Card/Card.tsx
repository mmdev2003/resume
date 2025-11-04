import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'featured' | 'bordered';
  hoverable?: boolean;
}

export const Card = ({
  children,
  className,
  variant = 'default',
  hoverable = true
}: CardProps) => {
  return (
    <motion.div
      className={`${styles.card} ${styles[variant]} ${className || ''}`}
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={hoverable ? {
        y: -2,
        transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};
