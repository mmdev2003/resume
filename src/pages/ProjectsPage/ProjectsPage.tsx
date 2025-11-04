import { motion } from 'framer-motion';
import styles from './ProjectsPage.module.css';

export const ProjectsPage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Projects Gallery</h1>
      <p>All projects will be displayed here with filtering</p>
    </motion.div>
  );
};
