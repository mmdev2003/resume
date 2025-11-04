import { Badge } from '../../shared/ui';
import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  badges?: Array<{ text: string; variant: 'social' | 'enterprise' | 'web3' | 'architecture' }>;
  team?: string;
  architecture?: string;
  origin?: string;
  techStack: string[];
  highlights: string[];
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  badges,
  team,
  architecture,
  origin,
  techStack,
  highlights,
  featured = false
}: ProjectCardProps) => {
  return (
    <motion.div
      className={`${styles.projectCard} ${featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{title}</h3>
        {badges && badges.length > 0 && (
          <div className={styles.projectBadges}>
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <p className={styles.projectDescription}>{description}</p>

      {(team || architecture || origin) && (
        <div className={styles.projectDetails}>
          {team && (
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Команда:</span>
              <span>{team}</span>
            </div>
          )}
          {architecture && (
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Архитектура:</span>
              <span>{architecture}</span>
            </div>
          )}
          {origin && (
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Происхождение:</span>
              <span>{origin}</span>
            </div>
          )}
        </div>
      )}

      <div className={styles.techStack}>
        {techStack.map((tech, index) => (
          <span key={index} className={styles.techTag}>{tech}</span>
        ))}
      </div>

      {highlights.length > 0 && (
        <div className={styles.projectHighlights}>
          <div className={styles.highlightsTitle}>Ключевые особенности:</div>
          <div className={styles.highlightsList}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightPoint}>{highlight}</div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
