import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import styles from './ProjectDetailPage.module.css';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Project Detail: {id}</h1>
      <p>Detailed information about the project</p>
    </motion.div>
  );
};
