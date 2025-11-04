import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.css';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ title, children, className }: SectionProps) => {
  return (
    <motion.section
      className={`${styles.section} ${className || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </motion.section>
  );
};
