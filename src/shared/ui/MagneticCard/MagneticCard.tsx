import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';
import styles from './MagneticCard.module.css';

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticCard = ({ children, className, strength = 20 }: MagneticCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull effect
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = Math.sqrt(rect.width ** 2 + rect.height ** 2) / 2;
    const magneticStrength = Math.max(0, 1 - distance / maxDistance);

    x.set(distanceX * magneticStrength * 0.15);
    y.set(distanceY * magneticStrength * 0.15);

    // 3D tilt effect
    const rotateXValue = (distanceY / rect.height) * -strength;
    const rotateYValue = (distanceX / rect.width) * strength;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.magneticCard} ${className || ''}`}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardContent} style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
      {isHovered && (
        <motion.div
          className={styles.spotlight}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};
