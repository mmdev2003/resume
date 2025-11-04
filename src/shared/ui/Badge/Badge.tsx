import { ReactNode } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'skill' | 'social' | 'enterprise' | 'web3' | 'architecture';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className || ''}`}>
      {children}
    </span>
  );
};
